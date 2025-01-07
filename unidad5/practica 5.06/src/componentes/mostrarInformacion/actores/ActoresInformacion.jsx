import {useContext} from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import { generarUuidAleatorio } from '../../../biblioteca/biblioteca.js';
import ActorInformacion from './ActorInformacion.jsx';

const ActoresInformacion = () => {
    //Javascript
    const { actorFiltrado } = useContext(contextoPeliculas);
  return (
    <>
        {actorFiltrado.length && Array.isArray(actorFiltrado)?
        actorFiltrado.map((interprete)=>{
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