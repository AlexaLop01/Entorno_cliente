import React,{ createContext , useState} from 'react'


const ProductosContext = createContext();
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
    const [errorProductos, setErrorProductos] = useState(errorInicial);
    const [ produtoSeleccionado, setProdutoSeleccionado] = useState(productoInicial);

    //Creamos las funciones que vamos a utilizar en el contexto de los productos.
    //Función para listar los productos.

    //Funciones para filtrar por nombre, precio y peso, estos filtros.

    //Función para ordenar los productos.




    const datosProductosProveer = {};
  return (
    <>
    <ProductosContext.Provider value={datosProductosProveer} >
        {children}
    </ProductosContext.Provider>
    </>
  )
}

export default ProveedorProductos;
export { ProductosContext };