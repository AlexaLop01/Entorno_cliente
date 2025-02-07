import React, { createContext } from 'react';


const contextoListaCompra = createContext();
const ProveedorListaCompra = ({children}) => {


    const datosAExportar = {
        
    }
  return (
    <>
        <contextoListaCompra.Provider value={datosAExportar}>
            {children}
        </contextoListaCompra.Provider>
    </>
  )
}

export default ProveedorListaCompra;
export { contextoListaCompra };