import React, { useContext } from 'react';
import { contextoProductos } from '../../../contextos/ProveedorProductos.jsx';
import ListadoProducto from './ListadoProducto.jsx';
import "./ListadoProductos.css"


const ListadoProductos = () => {
  const { listadoProductos, listadoProductosFiltrado } = useContext(contextoProductos);

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
  return (
    <>
      <div className="contenedorResumen">
        <h2>Resumen</h2>
        <p>Número de productos: {numeroProductos}</p>
        <p>Precio medio: {precioMedio.toFixed(2)}</p>
      </div>
      
      <div className="contenedorListadoProductos">
        {productosAMostrar.length ? (
          productosAMostrar.map((producto) => (
            <ListadoProducto key={producto.id} datos={producto} />
          ))
        ) : (
          `No hay productos para mostrar`
        )}
      </div>
    </>
  );
};

 
export default ListadoProductos