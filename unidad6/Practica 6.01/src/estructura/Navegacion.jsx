import React, { useContext } from "react";
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
        {!sesionIniciada && (
          <Link className='navegacion__enlace' to='/login'>
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navegacion;
