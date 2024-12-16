import React from 'react';

const InformacionLocalizacion = (mostrarInformacion) => {
    console.log(mostrarInformacion);
  return (
    <>
    <div>
        <p>{mostrarInformacion.name}</p>
        <p>{mostrarInformacion.type}</p>
    </div>
    </>
  )
}

export default InformacionLocalizacion;