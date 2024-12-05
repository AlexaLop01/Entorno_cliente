import React from 'react';
import Pelicula from './Pelicula.jsx';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca.js';


const Peliculas = ({mostrarLista}) => {
    //Javascript
  return (
    //JSX
    <>
      {mostrarLista.length && Array.isArray(mostrarLista)
      ? mostrarLista.map((pelicula)=>{
        return(
          <Pelicula
          key={generarUuidAleatorio()}
          peliculaAMostrar={pelicula}/>
        );
      })
    : `No se ha encontrado ninguna pelicula.`}
    </>
  )
}

export default Peliculas;