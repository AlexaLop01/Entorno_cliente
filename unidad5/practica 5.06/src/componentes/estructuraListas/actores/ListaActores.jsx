import React, { useContext } from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import Actores from '../../mostrarListas/actores/Actores.jsx';
import "./ListaActores.css";
import ActoresInformacion from '../../mostrarInformacion/actores/ActoresInformacion.jsx';

const ListaActores = () => {
    //Javascript
    const { actorFiltrado , filtrarActor} = useContext(contextoPeliculas);

  return (
    <>
        <div className='contenedor-lista-actores' onClick={filtrarActor}>
            <Actores/>
        </div>
        <div>
            <ActoresInformacion actoresInformacionAMostrar={actorFiltrado}/>
        </div>
    </>
  )
}

export default ListaActores;