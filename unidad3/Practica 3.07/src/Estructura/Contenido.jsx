import React from "react";

const Contenido = (props) => {
  const {children} = props;
  return (
    <>
      <div id='contenedor-contenido'>{children}</div>
    </>
  )
}

export default Contenido;