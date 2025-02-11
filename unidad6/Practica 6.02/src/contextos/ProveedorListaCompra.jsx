import React, { createContext, useState, useContext, useEffect } from 'react';
import { contextoSesion } from './ProveedorSesion.jsx';
import { supabaseConnection } from '../config/supabase.js';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';

const contextoListaCompra = createContext();

const ProveedorListaCompra = ({ children }) => {
  const { usuario } = useContext(contextoSesion);
  
  // Estados
  const [listas, setListas] = useState([]);
  const [datosFormulario, setDatosFormulario] = useState({ nombre_lista: "" });
  const [productosAgregados, setProductosAgregados] = useState([]);
  const [formularioVisible, setFormularioVisible] = useState(false);

  //Llamada de la base de datos inicial de las listas.
  const obtenerListas = async () => {
  if (!usuario || !usuario.id) {
    console.warn("El usuario no está definido. No se pueden obtener listas.");
    return;
  }

  try {
    const { data, error } = await supabaseConnection
      .from('listacompra')
      .select('*')
      .eq('id_usuario', usuario.id);

    if (error) throw error;
    setListas(data);
  } catch (error) {
    console.error("Error obteniendo listas:", error);
  }
};



  // Actualizar datos del formulario
  const actualizarDatoLista = (evento) => {
    const { name, value } = evento.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  };

  // Crear una nueva lista
  const crearLista = async () => {
    try {
      const listaNueva = {
        id: generarUuidAleatorio(),
        nombre_lista: datosFormulario.nombre_lista,
        id_usuario: usuario.id
      };

      const { data, error } = await supabaseConnection
        .from('listacompra')
        .insert([listaNueva])
        .select('*'); // Recuperamos la lista insertada desde Supabase

      if (error) throw error;

      if (data && data.length > 0) {
        setListas([...listas, data[0]]); // Usamos el objeto exacto devuelto por Supabase
      }

      setDatosFormulario({ nombre_lista: "" }); // Reiniciar formulario
      setFormularioVisible(false); // Ocultar formulario
    } catch (error) {
      console.error("Error creando lista:", error);
    }
  };

  // Eliminar lista de Supabase y actualizar el estado
  const borrarLista = async (idLista) => {
    try {
      const { error } = await supabaseConnection
        .from('listacompra')
        .delete()
        .eq('id', idLista);

      if (error) throw error;

      setListas(listas.filter(lista => lista.id !== idLista)); // Actualizar estado sin recargar
    } catch (error) {
      console.error("Error eliminando lista:", error);
    }
  };

  const cambiarVisibilidadFormulario = () => {
    setFormularioVisible(!formularioVisible);
  };

  //Función para guardar, actualizar y borrar los productos en la lista de compra.
  const ActualizacionProductosLista = async (productos, idLista) => {
    try {
      const idProductos = productos.map((p) => p.id_producto);
  
      // Solo ejecutar la eliminación si hay productos en la lista
      if (idProductos.length > 0) {
        await supabaseConnection
          .from("productoslistas")
          .delete()
          .eq("id_lista", idLista)
          .not("id_producto", "in", `(${idProductos.join(",")})`);
      }
  
      // Insertar o actualizar productos
      const productosAInsertar = productos.map((producto) => ({
        id_lista: idLista,
        id_producto: producto.id, 
        cantidad: producto.cantidad,
      }));
  
      const { error } = await supabaseConnection
        .from("productoslistas")
        .upsert(productosAInsertar);
  
      if (error) throw error;
    } catch (error) {
      console.error("Error actualizando productos en la lista:", error);
    }
  };
  

  //Esta es la función que se utiliza para traer los productos y poder guardarlo en el estado de productos agregados.
  const obtenerProductoLista = async (idLista) => {
    try {
      const { data, error } = await supabaseConnection
        .from("productoslistas")
        .select("id_producto, cantidad")
        .eq("id_lista", idLista);
  
      if (error) throw error;
  
      // Filtrar productos por la lista actual
      setProductosAgregados(data); 
  
      return data;
    } catch (error) {
      console.error("Error al obtener productos:", error.message);
      return [];
    }
  };
  

  //Esta función recoge los productos de la lista para mostrarlo en el componente de ver contenido.
  const obtenerProductosListaContenido = async (idLista) => {
    try {
      const { data, error } = await supabaseConnection
        .from("productoslistas")
        .select(`
          cantidad, 
          productos:productos(id, nombre, precio, imagen, peso)
        `)
        .eq("id_lista", idLista);
  
      if (error) throw error;
  
      // Transformamos los datos en un formato más accesible
      return data.map(({ cantidad, productos }) => ({
        id: productos.id,
        nombre: productos.nombre,
        precio: productos.precio,
        imagen: productos.imagen,
        peso: productos.peso,
        cantidad,
      }));
    } catch (error) {
      console.error("Error al obtener los productos de la lista:", error);
      return [];
    }
  };

  const obtenerPrecioPesoProducto = async (idLista) => {
    try {
      //Trae el id_producto, la cantidad y la información relacionada en la tabla de productos.
      const { data, error } = await supabaseConnection
        .from("productoslistas")
        .select(`
          id_producto, 
          cantidad, 
          productos:productos(id, precio, peso)
        `)
        .eq("id_lista", idLista);
  
      if (error) throw error;
  
      // Calcular los totales directamente dentro de la función
      const totalPrecio = data.reduce((acc, productoLista) => {
        const { precio } = productoLista.productos;
        const cantidad = productoLista.cantidad;
        acc += precio * cantidad; // Sumar el total del precio
        return acc;
      }, 0);
  
      const totalPeso = data.reduce((acc, productoLista) => {
        const { peso } = productoLista.productos;
        const cantidad = productoLista.cantidad;
        
        // Extraer el valor numérico del peso (eliminando las unidades como "kg")
        const pesoNumerico = parseFloat(peso.replace(/[^\d.-]/g, "")); // Quitar cualquier cosa que no sea número o punto decimal
        
        // Si no se pudo convertir el peso a número, asignamos 0
        if (!isNaN(pesoNumerico)) {
          acc += pesoNumerico * cantidad; // Sumar el total del peso
        } else {
          console.warn(`El peso de ${productoLista.productos.nombre} no es válido: ${peso}`);
        }
  
        return acc;
      }, 0);
  
      // Devolver los totales junto con la lista de productos
      return {
        productos: data, // Los productos no se modifican, solo se calculan los totales
        precioTotal: totalPrecio,
        pesoTotal: totalPeso,
      };
    } catch (error) {
      console.error("Error al obtener productos:", error);
      return { productos: [], precioTotal: 0, pesoTotal: 0 }; // Si hay error, devolver valores por defecto
    }
  };
  
    //Sin terminar.
  const actualizarNombreLista = async (idLista, nombre_lista) => {
    try {
      const { error } = await supabaseConnection
        .from("listacompra")
        .update(nombre_lista)
        .eq("id", idLista);
      if (error) throw error;
      //Este set coge el id de la lista, verifica que sea el que estamos modificando y cambia el atributo del nombre, y lo guarda en el estado para evitar consultas extras.
      setListas((prev) =>
        prev.map((lista) =>
          lista.id === idLista ? { ...lista, ...nombre_lista } : lista
        )
      );
    } catch (fallo) {
      setError(fallo.message);
    }
  };
  

  const datosAExportar = {
    listas,
    datosFormulario,
    formularioVisible,
    productosAgregados,
    setProductosAgregados,
    setDatosFormulario,
    crearLista,
    obtenerListas,
    actualizarDatoLista,
    borrarLista,
    cambiarVisibilidadFormulario,
    ActualizacionProductosLista,
    obtenerProductoLista,
    obtenerProductosListaContenido,
    obtenerPrecioPesoProducto,
    actualizarNombreLista
  };

  return (
    <contextoListaCompra.Provider value={datosAExportar}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
