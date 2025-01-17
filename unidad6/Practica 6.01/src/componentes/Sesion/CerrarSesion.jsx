import React,{ useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const CerrarSesion = () => {
  const {cerrarSesion , usuario} = useContext(contextoSesion);
  return (
    <div className='cerrarsesion__cerrar'>
      <h3>Hola, {usuario.email}</h3>
      <button className='botonSesion' onClick={() => {cerrarSesion()}}>Cerrar sesión</button>
    </div>
  )
}

export default CerrarSesion