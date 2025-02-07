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

   // Actualizar productos en una lista
  //  const actualizarProductosLista = async (idLista, productosEnLista) => {
  //   try {
  //     // Eliminar productos que ya no están en la lista
  //     const idsProductos = productosEnLista.map((p) => p.id_producto);
  //     await supabaseConexion
  //       .from("productos_listas")
  //       .delete()
  //       .eq("id_lista", idLista)
  //       .not("id_producto", "in", `(${idsProductos.join(",")})`);
  
  //     // Agregar o actualizar productos en la lista
  //     const productosConLista = productosEnLista.map((p) => ({
  //       id_lista: idLista,
  //       id_producto: p.id_producto,
  //       cantidad: p.cantidad,
  //     }));
  
  //     const { error } = await supabaseConexion.from("productos_listas").upsert(productosConLista);
  //     if (error) throw error;
  //   } catch (error) {
  //     console.error("Error al actualizar los productos en la lista:", error);
  //     throw error;
  //   }
  // };

  const datosAExportar = {
    listas,
    datosFormulario,
    formularioVisible,
    crearLista,
    actualizarDatoLista,
    cambiarVisibilidadFormulario,
    borrarLista
  };

  return (
    <contextoListaCompra.Provider value={datosAExportar}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
