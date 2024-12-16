import React from 'react'
import Localizacion from './Localizacion';
import { generarUuidAleatorio } from '../../../../../practica 5.04/src/biblioteca/biblioteca';

const Localizaciones = ({mostrarLocalizaciones}) => {
    //Javascript
  return (
    //JSX
    <>
    {mostrarLocalizaciones.length && Array.isArray(mostrarLocalizaciones) 
    ? mostrarLocalizaciones.map((lugar)=>{
        return(
            <Localizacion
            key={generarUuidAleatorio()}
            mostrarLocalizacion={lugar}
            />
        );
    }): `No se han encontrado lugares`}
    </>
  )
}

export default Localizaciones;