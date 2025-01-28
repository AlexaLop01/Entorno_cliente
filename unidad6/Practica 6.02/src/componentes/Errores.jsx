import React from "react";
import "./Errores.css";

const Errores = ({ children }) => {
  return (
    <div className="errores__container">
      <div className="errores__icon">⚠️</div>
      <div className="errores__error">{children}</div>
    </div>
  );
};

export default Errores;
