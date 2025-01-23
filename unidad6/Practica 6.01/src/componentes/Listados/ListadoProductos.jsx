import React, { useContext } from 'react';
import { contextoProductos } from '../../contextos/ProveedorProductos';
import ListadoProducto from './ListadoProducto';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca';

const ListadoProductos = () => {
    const { ListadoProductos } = useContext(contextoProductos);
  return (
    <>
    {ListadoProductos.length && Array.isArray(ListadoProductos) ? 
        ListadoProductos.map((producto) => {
        return (
            <ListadoProducto key={generarUuidAleatorio} datos={producto} />
        );
    }) : `No hay productos para mostrar`}
    </>
  )
}

export default ListadoProductos