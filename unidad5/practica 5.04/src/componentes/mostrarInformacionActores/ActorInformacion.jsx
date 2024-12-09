import React from 'react'

const ActorInformacion = ({informacionActor}) => {
    console.log(informacionActor);
  return (
    <>
      <h5>{informacionActor.name}</h5>
      <p>Genero: {informacionActor.gender}</p>
      <p>Altura: {informacionActor.height}</p>
      <p>Peso: {informacionActor.mass}</p>
      <p>Color de pelo: {informacionActor.hair_color}</p>
      <p>Color de ojos: {informacionActor.eye_color}</p>

    </>
  )
}

export default ActorInformacion