import React, { createContext, useEffect, useState } from "react";
import { supabaseConnection } from "../config/supabase.js";

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
  const [productoEdicion, setProductoEdicion] = useState(productoInicial);
  const [ListadoProductoInsertados, setListadoProductoInsertados] = useState([]);


  //Creamos las funciones que vamos a utilizar en el contexto de los productos.
  //Función para listar los productos.
  const obtenerProductos = async () => {
    //Llamamos a la API para obtener los productos.
    try {
      //Guardamos los productos en el estado.
      const { data, error } = await supabaseConnection
        .from("productos")
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

  //Sección para la edición de los datos
  const actualizarDatoEdicion = (evento) =>{
    const { name, value } = evento.target; // Desestructurar del evento
    setProductoEdicion({ ...productoEdicion, [name]: value });
  }

  const insertarProducto = async () => {
    try {
      productoEdicion.id = crypto.randomUUID();
      const { data, error } = await supabaseConnection.from("productos").insert(productoEdicion);
      if (error) {
        throw error;
      }
      setListadoProductos([...listadoProductos, productoEdicion]);
  
      // Añadir el producto al estado de productos insertados
      setListadoProductoInsertados(productoInsertado => [...productoInsertado, productoEdicion]);
      setProductoEdicion(productoInicial);
    } catch (error) {
      setErrorProductos(error.message);
    }
  };
  

  const actualizarProducto = async ()=>{
    try{
      const {data,error} = await supabaseConnection.from("productos")
      .update(productoEdicion)
      .eq("id", productoEdicion.id);
      
      if(error){
        throw error;
      }

      //Guardamos la actualización de producto. Primero con un map que cambie el dato 
      //y después guardandolo en el estado para evitar llamadas a la API.
      const productosModificados = listadoProductos.map((productoAntiguo)=>{
        //Esta ternaria que hacemos es para que localice el producto y haga la modificación, si se trata del producto que
        //queremos modificar lo modifica y si no, lo deja tal como está.
        return productoAntiguo.id === productoEdicion.id ? productoEdicion : productoAntiguo;
      });

      setListadoProductos(productosModificados);
      setProductoEdicion(productoInicial);

      

    }catch(error){
      setErrorProductos(error.message);
    }
  }

  const borrarProducto = async (id) =>{
    try{
      const {data, error } = await supabaseConnection.from("productos")
      .delete().eq("id",id);
  
      if(error){
        throw error;
      }
  
      //Realizamos un filter para cambiar el estado sin necesidad de tener que llamar a la API.
      const productosNoEliminados = listadoProductos.filter((producto)=>{
        return producto.id !== id;
      });

      const productosNoEliminadosInsertados = ListadoProductoInsertados.filter((producto)=>{
        return producto.id !== id;
      });
  
      setListadoProductosFiltrado(productosNoEliminados);
      setListadoProductos(productosNoEliminados);
      setListadoProductoInsertados(productosNoEliminadosInsertados);
    }catch(error){
      setErrorProductos(error.message);
    }
  }

  //Esta función se utiliza para la función de editar.
  const obtenerProductoPorId = (id) => {
    return listadoProductos.find(producto => producto.id === id);
  };


  useEffect(() => {
    obtenerProductos();
  }, []);

  const datosProductosProveer = {
    //Estados
    listadoProductos,
    listadoProductosFiltrado,
    errorProductos,
    filtros,
    productoEdicion,
    ListadoProductoInsertados,
    //Funciones filtros
    filtrosProductos,
    actualizarDatosProducto,
    borrarFiltros,
    borrarCampos,
    ordenarProductos,
    //Funciones Edición
    actualizarDatoEdicion,
    insertarProducto,
    actualizarProducto,
    borrarProducto,
    setProductoEdicion,
    obtenerProductoPorId
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
