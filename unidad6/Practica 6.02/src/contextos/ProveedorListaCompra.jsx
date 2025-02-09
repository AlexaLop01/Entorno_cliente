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
  const [formularioVisible, setFormularioVisible] = useState(false);

  // Obtener listas de compra desde Supabase
  useEffect(() => {
    const obtenerListas = async () => {
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

    obtenerListas();
  }, [usuario]);

  

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
  const ActualizacionProductosLista = async (productos, idLista)=>{
    try{
      //Esta función sirve para eliminar los productos que ya no existen en la lista.
      const idProductos = productos.map((p) => p.id_producto);
       await supabaseConnection
         .from("productoslistas")
         .delete()
         .eq("id_lista", idLista)
         .not("id_producto", "in", `(${idProductos.join(",")})`);

      //Esta sección funciona para insertar o actualizar los productos en la lista.
      const productosAInsertar = productos.map((producto) => ({
        id_lista: idLista,
        id_producto: producto.id,
        cantidad: producto.cantidad,
      }));
      const { data, error } = await supabaseConnection
          .from('productoslistas')
          .upsert(productosAInsertar);
  
      if (error) {
          throw error;
      }
    }catch (error){
      
    }
  };

  //Esta es la función de obtener productos de una lista de compra. La dejamos aquí por si la necesitamos más adelante.
  // const obtenerProductosListaMultiseleccion = async (idLista) => {
  //   try {
  //     const { data, error } = await supabaseConexion
  //       .from("productos_listas")
  //       .select(`
  //         cantidad, 
  //         productos:productos(id, nombre, precio, imagen, peso)
  //       `)
  //       .eq("id_lista", idLista);
  
  //     if (error) throw error;
  
  //     // Transformamos los datos en un formato más accesible
  //     return data.map(({ cantidad, productos }) => ({
  //       id: productos.id,
  //       nombre: productos.nombre,
  //       precio: productos.precio,
  //       imagen: productos.imagen,
  //       peso: productos.peso,
  //       cantidad,
  //     }));
  //   } catch (error) {
  //     console.error("Error al obtener los productos de la lista:", error);
  //     return [];
  //   }
  // };

  

  const datosAExportar = {
    listas,
    datosFormulario,
    formularioVisible,
    crearLista,
    actualizarDatoLista,
    cambiarVisibilidadFormulario,
    borrarLista,
    ActualizacionProductosLista
  };

  return (
    <contextoListaCompra.Provider value={datosAExportar}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
