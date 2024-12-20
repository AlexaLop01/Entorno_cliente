import React from 'react'
import Actor from './Actor.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';

const Actores = ({actoresAMostrar}) => {
    //Javascript
  return (
    <>
        {actoresAMostrar.length && actoresAMostrar ?
        actoresAMostrar.map((interprete)=>{
            return(
                <Actor 
                key={generarUuidAleatorio()}
                actorAMostrar={interprete}/>
            );
        }):`La pelicula no tiene actores.`}
    </>
  )
}

export default Actores;