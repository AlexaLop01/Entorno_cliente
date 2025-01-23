import React from 'react'
import ListadoProductos from '../Listados/ListadoProductos';
import FiltrosProductos from '../Filtros/FiltrosProductos';

const Listados = () => {
  
  return (
    <>
      <h2>Productos</h2>
      <FiltrosProductos/>
      <ListadoProductos />
    </>
    
  )
}

export default Listados;