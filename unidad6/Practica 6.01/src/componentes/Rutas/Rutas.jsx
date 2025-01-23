import React from 'react';
import {Routes, Route} from "react-router-dom";
import Inicio from '../Paginas/Inicio.jsx';
import Listados from '../Paginas/Listados.jsx';
import Login from '../Paginas/Login.jsx';
import Error from '../Paginas/Error.jsx';
import RecuperarContrasenya from '../Sesion/RecuperarContrasenya.jsx';

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/productos' element={<Listados/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/recuperar-contrasenya' element={<RecuperarContrasenya/>}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </>
  )
}

export default Rutas;