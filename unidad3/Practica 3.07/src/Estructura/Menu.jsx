import React from "react";
import {Link} from "react-router-dom";
import "../css/Menu.css";

const Menu = () => {
  return (
    <>
      <nav className="menu-contenedor">
        <Link className="menu-elemento" to="/">Inicio</Link>
        <Link className="menu-elemento" to="/peliculas">Peliculas</Link>
        <Link className="menu-elemento" to="/interpretes">Interpretes</Link>
        <Link className="menu-elemento" to="/galeria">Galeria</Link>
        <Link className="menu-elemento" to="/acerca-de">Acerca de</Link>
        <Link className="menu-elemento" to="/login">Login</Link>
      </nav>
    </>
  )
}

export default Menu;