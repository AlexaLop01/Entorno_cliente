import React from 'react';
import { Link } from 'react-router-dom';

const SubmenuGaleria = () => {
  return (
    <>
        <Link className='submenu-elementomenu' to='/galeria/movies'>Peliculas</Link> 
        <Link className='submenu-elementomenu' to='/galeria/interpretes'>Interpretes</Link> 
        <Link className='submenu-elementomenu' to='/galeria/directores'>Directores</Link> 
    </>
  )
}

export default SubmenuGaleria