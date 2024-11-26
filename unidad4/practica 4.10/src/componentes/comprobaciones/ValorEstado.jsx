import React from "react";

const ValorEstado = (props) => {
  const { estadoaMostrar } = props;
  return (
    <>
      <div>
        <h2>Valor del estado actual.</h2>
        <pre>{JSON.stringify(estadoaMostrar, null, 2)}</pre>
      </div>
    </>
  );
};

export default ValorEstado;