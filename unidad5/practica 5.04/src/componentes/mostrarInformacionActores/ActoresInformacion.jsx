import React from 'react';
import { generarUuidAleatorio } from '../../biblioteca/biblioteca.js';
import ActorInformacion from './ActorInformacion.jsx';

const ActoresInformacion = ({actoresInformacionAMostrar}) => {
    //Javascript
  return (
    <>
        {actoresInformacionAMostrar.length && actoresInformacionAMostrar ?
        actoresInformacionAMostrar.map((interprete)=>{
            return(
                <ActorInformacion
                key={generarUuidAleatorio()}
                informacionActor={interprete}/>
            );
        }):`No hay información del actor.`}
    </>
  )
}

export default ActoresInformacion;