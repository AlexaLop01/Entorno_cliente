import React from "react";
import "../css/Cabecera.css";

const Cabecera = (props) => {
  const {children} = props;
  return (
    <>
    <div className="cabecera-contenedor">
      <div>{children}</div>

    </div>
    </>
  )
}

export default Cabecera;