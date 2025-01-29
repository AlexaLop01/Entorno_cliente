import React from 'react'
import ListadoProductos from './Listados/ListadoProductos.jsx';
import FiltrosProductos from './Filtros/FiltrosProductos.jsx';
import FiltrosProductosOrdenados from './Filtros/FiltrosProductosOrdenados.jsx';
import "./Listados.css";

const Listados = () => {
  
  return (
    <>
      <div className='contenedorListados'>
        <h2>Productos</h2>
        <div className='contenedorFiltrosListados'>
          <FiltrosProductos/>
        </div>
        <div className='contenedorOrdenadosListados'>
          <FiltrosProductosOrdenados/>
        </div>
        <ListadoProductos />
      </div>
    </>
    
  )
}

export default Listados;