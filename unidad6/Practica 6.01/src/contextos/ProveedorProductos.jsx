import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "../config/supabase.js";
import ListadoProducto from "../componentes/Productos/Listados/ListadoProducto.jsx";

const contextoProductos = createContext();
const ProveedorProductos = ({ children }) => {
  //Creamos las variables que vamos a utilizar en las funciones y los estados.
  const listadoInicial = [];
  const errorInicial = "";
  const productoInicial = {
    nombre: "",
    peso: "",
    precio: 0,
    imagen: "",
    descripcion: "",
  };
  const filtroProductoInicial = {
    nombre: "",
    precio: 0,
    peso: "",
  };

  const [listadoProductos, setListadoProductos] = useState(listadoInicial);
  const [filtros, setFiltros] = useState(filtroProductoInicial);
  const [listadoProductosFiltrado, setListadoProductosFiltrado] = useState(listadoInicial);
  const [errorProductos, setErrorProductos] = useState(errorInicial);
  const [produtoSeleccionado, setProdutoSeleccionado] = useState(productoInicial);

  //Creamos las funciones que vamos a utilizar en el contexto de los productos.
  //Función para listar los productos.
  const obtenerProductos = async () => {
    //Llamamos a la API para obtener los productos.
    try {
      //Guardamos los productos en el estado.
      const { data, error } = await supabaseConexion
        .from("Productos")
        .select("*");
      //Si hay un error, lo lanzamos.
      if (error) {
        throw error;
      } else {
        setListadoProductos(data);
      }
    } catch (error) {
      //Guardamos el error en el estado.
      setErrorProductos(error.message);
    }
  };

  const actualizarDatosProducto = (evento) => {
    const { name, value } = evento.target; // Desestructurar del evento
    setFiltros({ ...filtros, [name]: value });
  };

  //Funciones para filtrar por nombre, precio y peso, estos filtros.
  const filtrosProductos = ({ nombre, precio, peso }) => {
    let filtrados = [...listadoProductos];
  
    if (nombre) {
      filtrados = filtrados.filter((producto) =>
        producto.nombre.toLowerCase().startsWith(nombre.toLowerCase())
      );
    }
    if (precio > 0) {
      filtrados = filtrados.filter((producto) => producto.precio >= precio);
    }
    if (peso) {
      filtrados = filtrados.filter((producto) => producto.peso >= peso);
    }
  
    setListadoProductosFiltrado(filtrados); // Actualiza el estado
  };
  
  const borrarFiltros = () => {
    setListadoProductosFiltrado([]); // Actualiza el estado
  };

  const borrarCampos = () =>{
    setFiltros(filtroProductoInicial);
  }

  //Función para ordenar los productos.
  const ordenarProductos = (campos, ascendente = true) => {
    const listaOrdenada = [...listadoProductos];
    listaOrdenada.sort((a, b) => {
      if (a[campos] > b[campos]) {
        return ascendente ? 1 : -1;
      }
      if (a[campos] < b[campos]) {
        return ascendente ? -1 : 1;
      }
      return 0;
    });
    setListadoProductosFiltrado(listaOrdenada);
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  const datosProductosProveer = {
    //Estados
    listadoProductos,
    listadoProductosFiltrado,
    errorProductos,
    produtoSeleccionado,
    filtros,
    //Funciones
    filtrosProductos,
    actualizarDatosProducto,
    borrarFiltros,
    borrarCampos,
    ordenarProductos
  };
  return (
    <>
      <contextoProductos.Provider value={datosProductosProveer}>
        {children}
      </contextoProductos.Provider>
    </>
  );
};

export default ProveedorProductos;
export { contextoProductos };
