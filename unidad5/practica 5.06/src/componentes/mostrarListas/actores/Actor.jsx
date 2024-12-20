import React from 'react';

const Actor = ({actorAMostrar}) => {
  return (
    <>
        <div>
            {/*Colocamos data-id para tener un dato que identifique el elemento sin usar la clave id. */}
            <h4 data-id ={actorAMostrar.name}>{actorAMostrar.name}</h4>
        </div>
    </>
  )
}

export default Actor;