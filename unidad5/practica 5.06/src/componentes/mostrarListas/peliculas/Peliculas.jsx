import React,{useContext} from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import Pelicula from './Pelicula.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';


const Peliculas = () => {
    //Javascript
    const {listado} = useContext(contextoPeliculas);
    
  return (
    //JSX
    <>
      {/*Verificamos que la lista que entra por props sea una array y tenga longitud */}
      {listado.length && Array.isArray(listado)
      ? listado.map((pelicula)=>{
        return(
          <Pelicula
          key={generarUuidAleatorio()}
          peliculaAMostrar={pelicula}/>
        );
      })
    : `No se ha encontrado ninguna película.`}
    </>
  )
}

export default Peliculas;