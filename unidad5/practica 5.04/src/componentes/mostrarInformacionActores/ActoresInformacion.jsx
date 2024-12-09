import React from 'react';
import Actor from '../mostrarListaActores/Actor.jsx';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca.js';

const ActoresInformacion = ({actoresInformacionAMostrar}) => {
    //Javascript
  return (
    <>
        {actoresInformacionAMostrar.length && actoresInformacionAMostrar ?
        actoresInformacionAMostrar.map((interprete)=>{
            return(
                <Actor 
                key={generarUuidAleatorio()}
                informacionActor={interprete}/>
            );
        }):`La pelicula no tiene actores.`}
    </>
  )
}

export default ActoresInformacion