import {useContext} from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import Actor from './Actor.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';

const Actores = () => {
    //Javascript
    const {listaActores} = useContext(contextoPeliculas);
  return (
    <>
        {listaActores.length && Array.isArray(listaActores) ?
        listaActores.map((interprete)=>{
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