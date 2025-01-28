import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">¡Ups! Algo salió mal</h1>
      <p className="error-message">
        Parece que esta página no está disponible. Por favor, vuelve atrás o intenta más tarde.
      </p>
    </div>
  );
};

export default Error;
