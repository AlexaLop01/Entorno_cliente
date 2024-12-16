import React from 'react'

const Localizacion = ({mostrarLocalizacion}) => {
    //Javascript
  return (
    //JSX
    <>
    <div>
        <h3 id={mostrarLocalizacion.id}>{mostrarLocalizacion.name}</h3>
    </div>
    </>
  )
}

export default Localizacion;