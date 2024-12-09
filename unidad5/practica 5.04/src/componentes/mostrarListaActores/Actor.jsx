import React from 'react';

const Actor = ({actorAMostrar}) => {
  return (
    <>
        <div>
            <h4 data-id ={actorAMostrar.value.name}>{actorAMostrar.value.name}</h4>
        </div>
    </>
  )
}

export default Actor;