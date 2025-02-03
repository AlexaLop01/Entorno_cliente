import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Paginas/Inicio.jsx';
import Listados from '../Productos/Listados.jsx';
import Login from '../Paginas/Login.jsx';
import Error from '../Paginas/Error.jsx';
import InsertarProductos from '../Productos/EdicionProductos/InsertarProductos.jsx';
import BorrarProductos from '../Productos/EdicionProductos/BorrarProductos.jsx';

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' element={<Listados/>}>
          <Route path='insertar' element={<InsertarProductos/>}/>
          <Route path='editar' element={<ActualizarPorducto/>}/>
          <Route path='borrar' element={<BorrarProductos/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default Rutas;