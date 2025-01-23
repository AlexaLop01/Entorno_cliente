import React, { useContext } from "react";
import { contextoSesion } from "../contextos/ProveedorSesion.jsx";
import { Link } from "react-router-dom";
import "./Navegacion.css";

const Navegacion = () => {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <>
      <nav className='navegacion__menu'>
        <Link className='navegacion__enlace' to='/'>
          Inicio
        </Link>
        {/* Si la sesión está iniciada, se muestra el enlace a la página de productos. */
        sesionIniciada && (
          <Link className='navegacion__enlace' to='/productos'>Productos</Link>
        )}
        {// Si la sesión no está iniciada, se muestra el enlace a la página de perfil.
        !sesionIniciada && (
          <Link className='navegacion__enlace' to='/login'>Login</Link>
        )}
      </nav>
    </>
  );
};

export default Navegacion;
