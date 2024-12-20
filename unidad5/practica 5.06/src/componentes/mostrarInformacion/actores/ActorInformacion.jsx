import React from 'react';
import "./ActorInformacion.css";

const ActorInformacion = ({informacionActor}) => {
  return (
    <>
      <fieldset className='contenedor-datos-actor'>
        <legend>Datos del actor</legend>
        <h4>{informacionActor.name}</h4>
        <p>Genero: {informacionActor.gender}</p>
        <p>Altura: {informacionActor.height}</p>
        <p>Peso: {informacionActor.mass}</p>
        <p>Color de pelo: {informacionActor.hair_color}</p>
        <p>Color de ojos: {informacionActor.eye_color}</p>
      </fieldset>

    </>
  )
}

export default ActorInformacion;