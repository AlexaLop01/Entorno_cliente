import React from 'react';
import "./InformacionResidente.css";

const InformacionResidente = ({informacionResidente}) => {
  return (
    <>
    <fieldset className='contenedor-datos-residente'>
        <legend>Datos del residente</legend>
        <h4>{informacionResidente.name}</h4>
        <p>Especie: {informacionResidente.species}</p>
        <p>Género: {informacionResidente.gender}</p>
        <p>Estado: {informacionResidente.status}</p>
        <img src={informacionResidente.image} alt={informacionResidente.name} />
        
      </fieldset>
    </>
  )
}

export default InformacionResidente;