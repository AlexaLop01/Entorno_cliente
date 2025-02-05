import React from 'react';
import { Link } from 'react-router-dom';
import "./SubmenuProductos.css";

const SubmenuProductos = () => {
  return (
    <>
    <nav id="contenedorMenuNavegacion">
        <Link className="enlaceSubMenu insertar" to="/edicionProductos/insertar">Insertar</Link>
        <Link className="enlaceSubMenu editar" to="/edicionProductos/editar">Editar</Link>
        <Link className="enlaceSubMenu borrar" to="/edicionProductos/borrar">Borrar</Link>            
    </nav>
    </>
  )
}

export default SubmenuProductos