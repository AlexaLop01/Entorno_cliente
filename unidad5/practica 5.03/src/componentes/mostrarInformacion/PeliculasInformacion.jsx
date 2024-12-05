import React from 'react'
import PeliculaInformación from './PeliculaInformación.jsx';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca.js';

const PeliculasInformacion = ({mostrarInformacion}) => {
  return (
    <>
    {mostrarInformacion.length && Array.isArray(mostrarInformacion)
        ? mostrarInformacion.map((pelicula)=>{
          return(
            <PeliculaInformación
            key={generarUuidAleatorio()}
            informacionAMostrar={pelicula}/>
          );    
        })
      : `No se ha encontrado ninguna pelicula.`}
    </>
  )
}

export default PeliculasInformacion;