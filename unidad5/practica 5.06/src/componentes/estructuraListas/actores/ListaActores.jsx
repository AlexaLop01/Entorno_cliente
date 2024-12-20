import React, { useEffect, useState } from 'react'
import { obtenerDatos } from "../../../biblioteca/biblioteca.js";
import Actores from '../../mostrarListas/actores/Actores.jsx';
import "./ListaActores.css";
import ActoresInformacion from '../../mostrarInformacion/actores/ActoresInformacion.jsx';

const ListaActores = () => {
    //Javascript


  return (
    <>
        <div className='contenedor-lista-actores' onClick={(evento)=>{
            if(evento.target.tagName === "H4"){//Con esta línea controlamos que solo ocurra cuando seleccione el elemento en especifico.
                filtrarActor(evento.target.dataset.id);
            }
        }}>
            <Actores actoresAMostrar={listaActores}/>
        </div>
        <div>
            <ActoresInformacion actoresInformacionAMostrar={actorFiltrado}/>
        </div>
    </>
  )
}

export default ListaActores;