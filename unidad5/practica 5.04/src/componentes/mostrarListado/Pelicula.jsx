import React from 'react';
import "./Pelicula.css";

const Pelicula = ({peliculaAMostrar}) => {
  //Javascript
  return (
    //JSX
    <>
      <div className='contendor-pelicula-lista'>
        {/*Ponemos el id en el nombre para que cuando se seleccione en el nombre pueda hacer el filtrado. */}
        <h3 id={peliculaAMostrar.episode_id}>
          {peliculaAMostrar.episode_id} : {peliculaAMostrar.title}
        </h3>
      </div>
    </>
  )
}

export default Pelicula;