import React from 'react'
import InformacionResidente from './InformacionResidente.jsx';
import { generarUuidAleatorio } from '../../../../../practica 5.04/src/biblioteca/biblioteca.js';

const InformacionResidentes = ({residentesInformacionAMostrar}) => {
  return (
    <>
        {residentesInformacionAMostrar.length && Array.isArray(residentesInformacionAMostrar)
        ? residentesInformacionAMostrar.map((personajes)=>{
            return(
                <InformacionResidente 
                key={generarUuidAleatorio()}
                informacionResidente={personajes}
                />
            )
        }): `No hay información del residente.`}
    </>
  )
}

export default InformacionResidentes;