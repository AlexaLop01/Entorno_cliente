import React, {useContext} from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import InicioSesion from "../Sesion/InicioSesion.jsx";
import CrearCuenta from '../Sesion/CrearCuenta.jsx';
import Errores from '../Errores.jsx';
import "./Login.css"; 

const Login = () => {
  const {errorUsuario}=useContext(contextoSesion);
  return (
    <>
      <div className='ContenedorLogin'>
          <InicioSesion/>
          <CrearCuenta/>
      </div>
      <div className='ContenedorErroresLogin'>
        {errorUsuario && <Errores>{errorUsuario}</Errores>}
      </div>
    
    </>
  )
}

export default Login;