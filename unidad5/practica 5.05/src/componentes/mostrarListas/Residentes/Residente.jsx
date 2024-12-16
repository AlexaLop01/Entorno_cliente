import React from 'react';

const Residente = ({residentemostrar}) => {
    //Javascript
  return (
    //JSX
    <>
      <div>
            {/*Colocamos data-id para tener un dato que identifique el elemento sin usar la clave id. */}
            <h4 data-id={residentemostrar.name}>{residentemostrar.name}</h4>
      </div>
    </>
  )
}

export default Residente;