import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
        <nav>
            <Link className="menu-elemento" to="/">Inicio</Link>
            <Link className="menu-elemento" to="/contacto">Contacto</Link>
            <Link className="menu-elemento" to="/acerca-de">Acerca de</Link>
            <Link className="menu-elemento" to="/productos">Productos</Link>
            <Link className="menu-elemento" to="/login">Login</Link>
        </nav>
    </>
  )
}

export default Menu;