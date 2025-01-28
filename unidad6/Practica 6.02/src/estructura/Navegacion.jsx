import React, { useContext } from 'react';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  const {sesionIniciada} = useContext(contextoSesion);
  return (
    <nav className='contenedorMenuNavegacion'>
        <Link className='enlaceMenu' to='/'>
          Inicio
        </Link>
        {// Si la sesión no está iniciada, se muestra el enlace a la página de perfil.
        !sesionIniciada && (
          <Link className='enlaceMenu' to='/login'>
            Login
          </Link>
        )}
      </nav>
  )
}

export default Navegacion