import React from 'react';
import { formatearFechaEuropeo } from '../../biblioteca/biblioteca';

const PeliculaInformación = ({informacionAMostrar}) => {
    //Javascript
  return (
    //JSX
    <>
      <div>
        <h3>{informacionAMostrar.title}</h3>
        <p>{informacionAMostrar.director}</p>
        <p>{informacionAMostrar.producer}</p>
        <p>{formatearFechaEuropeo(informacionAMostrar.release_date)}</p>
        <p>{informacionAMostrar.opening_crawl}</p>
      </div>
    </>
  )
}

export default PeliculaInformación;