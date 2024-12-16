import React from 'react';
import ListaResidentes from '../../ListaResidentes.jsx';

const InformacionLocalizacion = ({mostrarInformacion}) => {
  return (
    <>
    <div>
        <h4>{mostrarInformacion.name}</h4>
        <p>Tipo: {mostrarInformacion.type}</p>
        <p>Dimension: {mostrarInformacion.dimension}</p>
    </div>
    <div>
      <ListaResidentes residentes={mostrarInformacion.residents}/>
    </div>
    </>
  )
}

export default InformacionLocalizacion;