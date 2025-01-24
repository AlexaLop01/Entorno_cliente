import React from 'react'
import ListadoProductos from './Listados/ListadoProductos.jsx';
import FiltrosProductos from './Filtros/FiltrosProductos.jsx';
import FiltrosProductosOrdenados from './Filtros/FiltrosProductosOrdenados.jsx';

const Listados = () => {
  
  return (
    <>
      <h2>Productos</h2>
      <FiltrosProductos/>
      <FiltrosProductosOrdenados/>
      <ListadoProductos />
    </>
    
  )
}

export default Listados;