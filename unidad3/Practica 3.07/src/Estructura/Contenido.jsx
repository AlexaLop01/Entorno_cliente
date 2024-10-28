import React from "react";
import "../css/Contenido.css"

const Contenido = (props) => {
  const {children} = props;
  return (
    <>
      <div id='contenido-contenedor'>{children}</div>
    </>
  )
}

export default Contenido;