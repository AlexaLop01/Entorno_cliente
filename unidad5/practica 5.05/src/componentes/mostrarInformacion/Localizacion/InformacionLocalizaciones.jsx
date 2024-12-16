import React from 'react'
import InformacionLocalizacion from './InformacionLocalizacion.jsx';
import { generarUuidAleatorio } from '../../../../../practica 5.04/src/biblioteca/biblioteca.js';

const InformacionLocalizaciones = ({mostrarInformacionLocalizaciones}) => {
    //Javascript
  return (
    //JSX
    <>
    <div>
        {mostrarInformacionLocalizaciones.length && Array.isArray(mostrarInformacionLocalizaciones)
        ? mostrarInformacionLocalizaciones.map((lugar)=>{
            return(
                <InformacionLocalizacion 
                key={generarUuidAleatorio()}
                mostrarInformacion = {lugar}/>
                
            )
        }): `No hay información de los lugares.`}
    </div>
    </>
  )
}

export default InformacionLocalizaciones;