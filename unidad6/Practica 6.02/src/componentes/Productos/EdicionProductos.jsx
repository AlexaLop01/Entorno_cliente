import React from 'react';
import SubmenuProductos from '../../estructura/SubmenuProductos.jsx';
import { Outlet } from 'react-router-dom';

const EdicionProductos = () => {
  return (
    <>
      <div className='contenedorListados'>
        <SubmenuProductos/>
        <Outlet/>

      </div>
    
    </>
  )
}

export default EdicionProductos