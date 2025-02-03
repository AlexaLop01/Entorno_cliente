import React from 'react';
import { Link } from 'react-router-dom';

const SubmenuProductos = () => {
  return (
    <>
    <nav id="contenedorMenuNavegacion">
        <Link className="enlaceMenu" to="/productos/insertar">Insertar</Link>
        <Link className="enlaceMenu" to="/productos/insertar">Editar</Link>
        <Link className="enlaceMenu" to="/productos/insertar">Borrar</Link>            
    </nav>
    </>
  )
}

export default SubmenuProductos