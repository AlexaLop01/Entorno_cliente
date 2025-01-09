import React, {createContext} from 'react';

const contextoSesion = createContext();

const ProveedorSesion = ({children}) => {
    const datosProveer = {};
  return (
    <contextoSesion.Provider value={datosProveer}>
      {children}
    </contextoSesion.Provider>
  )
}

export default ProveedorSesion;