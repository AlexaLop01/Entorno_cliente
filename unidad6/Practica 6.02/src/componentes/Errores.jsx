import React from "react";

const Errores = ({ children }) => {
  return (
    <>
      <div className='errores__error'>{children}</div>
    </>
  );
};

export default Errores;