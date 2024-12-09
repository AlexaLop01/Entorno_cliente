import React from 'react';
import Pelicula from './Pelicula.jsx';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca.js';


const Peliculas = ({mostrarLista}) => {
    //Javascript
  return (
    //JSX
    <>
      {/*Verificamos que la lista que entra por props sea una array y tenga longitud */}
      {mostrarLista.length && Array.isArray(mostrarLista)
      ? mostrarLista.map((pelicula)=>{
        return(
          <Pelicula
          key={generarUuidAleatorio()}
          peliculaAMostrar={pelicula}/>
        );
      })
    : `No se ha encontrado ninguna película.`}
    </>
  )
}

export default Peliculas;