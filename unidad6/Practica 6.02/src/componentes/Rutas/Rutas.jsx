import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Paginas/Inicio.jsx';
import Listados from '../Productos/Listados.jsx';
import Login from '../Paginas/Login.jsx';
import Error from '../Paginas/Error.jsx';

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' element={<Listados/>}>
          <Route path='insertar' />
          <Route path='editar' />
          <Route path='borrar' />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default Rutas;