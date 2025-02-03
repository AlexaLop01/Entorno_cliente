import React from 'react'
import ListadoProductos from './Listados/ListadoProductos.jsx';
import FiltrosProductos from './Filtros/FiltrosProductos.jsx';
import FiltrosProductosOrdenados from './Filtros/FiltrosProductosOrdenados.jsx';
import "./Listados.css";
import SubmenuProductos from '../../estructura/SubmenuProductos.jsx';
import { Outlet } from 'react-router-dom';

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
        <SubmenuProductos/>
        <Outlet/>
        <ListadoProductos />
      </div>
    </>
    
  )
}

export default Listados;