import React from 'react';
import "./Localizacion.css";

const Localizacion = ({mostrarLocalizacion}) => {
    //Javascript
  return (
    //JSX
    <>
    <div className='contendor-localizacion-lista'>
        <h3 id={mostrarLocalizacion.id}>{mostrarLocalizacion.name}</h3>
    </div>
    
    </>
  )
}

export default Localizacion;