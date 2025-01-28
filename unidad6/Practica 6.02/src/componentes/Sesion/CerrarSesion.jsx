import React,{ useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const CerrarSesion = () => {
  const {cerrarSesion , usuario} = useContext(contextoSesion);
  
  return (
    <div className='contenedorCerrarSesion'>
      <h3>Hola, {usuario.email}</h3>
      <button className='btnnSesion' onClick={() => {
        cerrarSesion()
        }}>Cerrar sesión</button>
    </div>
  )
}

export default CerrarSesion