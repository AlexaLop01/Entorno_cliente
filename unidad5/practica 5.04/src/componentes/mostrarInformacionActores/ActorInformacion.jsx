import React from 'react';
import "./ActorInformacion.css";

const ActorInformacion = ({informacionActor}) => {
  return (
    <>
      <fieldset className='contenedor-datos-actor'>
        <legend>Datos del actor</legend>
        <h4>{informacionActor.value.name}</h4>
        <p>Genero: {informacionActor.value.gender}</p>
        <p>Altura: {informacionActor.value.height}</p>
        <p>Peso: {informacionActor.value.mass}</p>
        <p>Color de pelo: {informacionActor.value.hair_color}</p>
        <p>Color de ojos: {informacionActor.value.eye_color}</p>
      </fieldset>

    </>
  )
}

export default ActorInformacion;