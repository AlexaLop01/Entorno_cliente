import React from 'react';

const Pelicula = ({peliculaAMostrar}) => {
  //Javascript
  return (
    //JSX
    <>
      <h3 id={peliculaAMostrar.episode_id}>
        {peliculaAMostrar.episode_id} : {peliculaAMostrar.title}
      </h3>
    </>
  )
}

export default Pelicula;