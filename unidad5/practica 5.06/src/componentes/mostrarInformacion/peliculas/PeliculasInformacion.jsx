import React, {useContext} from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import PeliculaInformación from './PeliculaInformacion.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';

const PeliculasInformacion = () => {
  //Javascript
  const {peliculaFiltrada} = useContext(contextoPeliculas);
  
  return (
    <>
    {/*Verificamos que la información que entra por props sea una array y tenga longitud */}
    {peliculaFiltrada.length && Array.isArray(peliculaFiltrada)
        ? peliculaFiltrada.map((pelicula)=>{
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