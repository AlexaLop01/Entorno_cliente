import React, { useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const InicioSesion = () => {
  const { actualizarDato, iniciarSesionConContrasenya } = useContext(contextoSesion);
  return (
    <div className='contenedorInicioSesion'>
      <h2>Iniciar sesión</h2>
      <label htmlFor='correo'>Correo electrónico</label>
      <input
        type='email'
        name='correo'
        id='correo'
        placeholder='Su correo electrónico'
        onChange={(e) => {actualizarDato(e)}}
      />
      <label htmlFor='contrasenya'>Contraseña</label>
      <input
        type='password'
        name='contrasenya'
        id='contrasenya'
        placeholder='Su contraseña.'
        onChange={(e) => {actualizarDato(e)}}
      />

      <button className='btnSesion' onClick={(e) => {iniciarSesionConContrasenya()}}>
        Iniciar sesión
      </button>
    
    </div>
  )
}

export default InicioSesion