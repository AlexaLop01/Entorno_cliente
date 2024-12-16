import React from 'react';
import Residente from './Residente';
import { generarUuidAleatorio } from '../../../../../practica 5.04/src/biblioteca/biblioteca';

const Residentes = ({residentesAMostrar}) => {
    //Javascript
  return (
    //JSX
    <>
        {residentesAMostrar.length && Array.isArray(residentesAMostrar)
        ? residentesAMostrar.map((personajes)=>{
            return(
                <Residente 
                key={generarUuidAleatorio()}
                residentemostrar={personajes}
                />
            );

        }): `No hay residentes en esta localización.`}
    </>
  )
}

export default Residentes