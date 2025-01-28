import React from 'react';
import "./Contenido.css";

const Contenido = ({children}) => {
  return (
    <>
      <div id='contenidoPrincipal'>{children}</div>
    </>
  )
}

export default Contenido