import React from 'react';
import "./Login.css";
import CrearCuenta from '../Sesion/CrearCuenta.jsx';
import InicioSesion from '../Sesion/InicioSesion.jsx';

const Login = () => {
  return (
    <>
      <div className='ContenedorLogin'>
        <InicioSesion/>
        <CrearCuenta/>
      </div>
    
    </>
  )
}

export default Login