//Esta línea de useProductos es un hook que dentro hace la llamada a su proveedor correspondiente y guarda todo el contexto.
import useProductos from '../../../hooks/useProductos.js';
import ListadoProducto from './ListadoProducto.jsx';
import "./ListadoProductos.css";


const ListadoProductos = ({borrado, actualizar, agregarALista}) => {
  const { listadoProductos, listadoProductosFiltrado } = useProductos();

  //Muestra los productos, ya sea toda la lista de inicio o la lista filtrada.
  const productosAMostrar = listadoProductosFiltrado.length
    ? listadoProductosFiltrado
    : listadoProductos;

  //Calcula la cantidad de productos que hay y el precio medio de los productos.
  const numeroProductos = productosAMostrar.length;
  const precioMedio =
    numeroProductos > 0
      ? productosAMostrar.reduce((acc, producto) => acc + producto.precio, 0) / numeroProductos
      : 0;

  /*Para borrar el producto que queremos borrar, tenemos un parámetro que entra por props,
  que especifica que si ese parámetro es true , realiza esta función.  */

  return (
    <>
      <div className="contenedorResumen">
        <h2>Resumen</h2>
        <p>Número de productos: {numeroProductos}</p>
        <p>Precio medio: {precioMedio.toFixed(2)}€</p>
      </div>
      
      <div className="contenedorListadoProductos">
        {productosAMostrar.length ? (
          productosAMostrar.map((producto) => (
            <ListadoProducto key={producto.id} datos={producto} borrado={borrado} actualizar={actualizar} agregarALista={agregarALista}/>
          ))
        ) : (
          `No hay productos para mostrar`
        )}
      </div>
    </>
  );
};

 
export default ListadoProductos