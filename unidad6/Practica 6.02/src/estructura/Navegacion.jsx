import React, { useContext } from 'react';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';
import { Link } from 'react-router-dom';
import "./Navegacion.css";

const Navegacion = () => {
  const { sesionIniciada } = useContext(contextoSesion);
  return (
    <nav id="contenedorMenuNavegacion">
      <Link className="enlaceMenu" to="/">
        Inicio
      </Link>
      {!sesionIniciada && (
        <Link className="enlaceMenu" to="/login">
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navegacion;
