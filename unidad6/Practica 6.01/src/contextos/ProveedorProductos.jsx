import React,{ createContext , useState} from 'react'
import { supabaseConexion } from '../config/supabase.js';


const contextoProductos = createContext();
const ProveedorProductos = ({children}) => {
    //Creamos las variables que vamos a utilizar en las funciones y los estados.
    const listadoInicial = [];
    const errorInicial = "";
    const productoInicial = {
        nombre_producto: "",
        peso:"",
        precio: "",
        imagen:"",
        descripcion: ""
    };

    const [listadoProductos, setListadoProductos] = useState(listadoInicial);
    const [listadoProductosFiltrado, setListadoProductosFiltrado] = useState(listadoInicial);
    const [errorProductos, setErrorProductos] = useState(errorInicial);
    const [ produtoSeleccionado, setProdutoSeleccionado] = useState(productoInicial);

    //Creamos las funciones que vamos a utilizar en el contexto de los productos.
    //Función para listar los productos.
    const obtenerProductos = async () => {
        //Llamamos a la API para obtener los productos.
        try{
            //Guardamos los productos en el estado.
            const { data, error} = await supabaseConexion.from("productos").select("*");
            //Si hay un error, lo lanzamos.
            if(error){
                throw error;
            }else{
                setListadoProductos(data);
            }
        }catch(error){
            //Guardamos el error en el estado.
            setErrorProductos(error.message);
        }
    }

    //Funciones para filtrar por nombre, precio y peso, estos filtros.
    const filtrarPorNombre = (nombre) => {
        //Filtramos los productos por nombre.
        const filtroNombre = listadoProductos.filter((producto) => 
          producto.nombre_producto.toLowerCase().includes(nombre.toLowerCase())
        );
        //Guardamos el listado filtrado en el estado.
        setListadoProductosFiltrado(filtroNombre);
    }

    const filtrarPorPrecio = (precio) => {
        //Filtramos los productos por precio.
        const filtroPrecio = listadoProductos.filter((producto) =>
          producto.precio <= precio
        );
        //Guardamos el listado filtrado en el estado.
        setListadoProductosFiltrado(filtroPrecio);
    }

    const filtrarPorPeso = (peso) => {
        //Filtramos los productos por peso.
        const filtroPeso = listadoProductos.filter((producto) =>
          producto.peso <= peso
        );
        //Guardamos el listado filtrado en el estado.
        setListadoProductosFiltrado(filtroPeso);
    }
    //Función para ordenar los productos.
    


    const datosProductosProveer = {
      //Estados
      listadoProductos,
      listadoProductosFiltrado,
      errorProductos,
      produtoSeleccionado,
      //Funciones
      obtenerProductos,
      filtrarPorNombre,
      filtrarPorPrecio,
      filtrarPorPeso
    };
  return (
    <>
    <contextoProductos.Provider value={datosProductosProveer} >
        {children}
    </contextoProductos.Provider>
    </>
  )
}

export default ProveedorProductos;
export { contextoProductos };