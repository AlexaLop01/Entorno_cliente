import React from 'react';
import { formatearFechaEuropeo } from '../../biblioteca/biblioteca.js';
import ListaActores from '../ListaActores.jsx';

const PeliculaInformación = ({informacionAMostrar}) => {
    //Javascript
  return (
    //JSX
    <>
      <div>
        <h3>{informacionAMostrar.title}</h3>
        <p>Director: {informacionAMostrar.director}</p>
        <p>Productor: {informacionAMostrar.producer}</p>
        <p>{formatearFechaEuropeo(informacionAMostrar.release_date)}</p>
        <p>{informacionAMostrar.opening_crawl}</p>
      </div>
      <div>
        <ListaActores actores={informacionAMostrar.characters}/>
      </div>
    </>
  )
}

export default PeliculaInformación;