import React, { useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const CrearCuenta = () => {
  const { crearCuenta, actualizarDato} = useContext(contextoSesion);
  return (
    <div className='contenedorCrearCuenta'>
      <h2>Registrate</h2>
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
      <button className='btnSesion' onClick={(e) => {crearCuenta()}}>
        Crear cuenta
      </button>
      
    </div>
  )
}

export default CrearCuenta