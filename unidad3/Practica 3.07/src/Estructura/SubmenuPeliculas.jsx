import React from 'react';
import { Link } from 'react-router-dom';
import "../css/SubmenuPeliculas.css";

const SubmenuPeliculas = () => {
  return (
    <>
    <div>
        <Link className='submenu-elementomenu' to='/peliculas/movies'>Peliculas</Link> 
        <Link className='submenu-elementomenu' to='/peliculas/interpretes'>Interpretes</Link> 
        <Link className='submenu-elementomenu' to='/peliculas/directores'>Directores</Link> 
    </div>
    </>
  )
}

export default SubmenuPeliculas;