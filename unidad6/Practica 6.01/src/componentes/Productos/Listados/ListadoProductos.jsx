import React, { useContext } from 'react';
import { contextoProductos } from '../../../contextos/ProveedorProductos';
import ListadoProducto from './ListadoProducto';

const ListadoProductos = () => {
  const { listadoProductos, listadoProductosFiltrado } = useContext(contextoProductos);

  const productosAMostrar = listadoProductosFiltrado.length
    ? listadoProductosFiltrado
    : listadoProductos;

  return (
    <>
      {productosAMostrar.length ? (
        productosAMostrar.map((producto) => (
          <ListadoProducto key={producto.id} datos={producto} />
        ))
      ) : (
        `No hay productos para mostrar`
      )}
    </>
  );
};

 
export default ListadoProductos