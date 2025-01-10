import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Paginas/Inicio.jsx';
import Login from '../Paginas/Login.jsx';
import Error from '../Paginas/Error.jsx';

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </>
  )
}

export default Rutas;