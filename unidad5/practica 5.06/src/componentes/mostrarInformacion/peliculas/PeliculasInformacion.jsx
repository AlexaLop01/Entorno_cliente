import React from 'react'
import PeliculaInformación from './PeliculaInformacion.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';

const PeliculasInformacion = ({mostrarInformacion}) => {
  return (
    <>
    {/*Verificamos que la información que entra por props sea una array y tenga longitud */}
    {mostrarInformacion.length && Array.isArray(mostrarInformacion)
        ? mostrarInformacion.map((pelicula)=>{
          return(
            <PeliculaInformación
            key={generarUuidAleatorio()}
            informacionAMostrar={pelicula}/>
          );    
        })
      : `No se ha encontrado ninguna película.`}
    </>
  )
}

export default PeliculasInformacion;