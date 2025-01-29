import React,{ useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const CerrarSesion = () => {
  const {cerrarSesion} = useContext(contextoSesion);
  
  return (
    <div className='contenedorCerrarSesion'>
      <button className='btnCerrarSesion' onClick={() => {
        cerrarSesion()
        }}>Cerrar sesión</button>
    </div>
  )
}

export default CerrarSesion