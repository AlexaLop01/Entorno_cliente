import React from 'react';

const InformacionLocalizacion = ({mostrarInformacion}) => {
  return (
    <>
    <div>
        <h4>{mostrarInformacion.name}</h4>
        <p>Tipo: {mostrarInformacion.type}</p>
        <p>Dimension: {mostrarInformacion.dimension}</p>
    </div>
    </>
  )
}

export default InformacionLocalizacion;