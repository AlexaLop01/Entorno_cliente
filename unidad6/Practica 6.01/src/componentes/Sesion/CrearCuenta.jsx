import React, { useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import Errores from '../Errores.jsx';

const CrearCuenta = () => {
  const { errorUsuario,crearCuenta, actualizarDato} = useContext(contextoSesion);
  return (
    <div className='cuentaUsuario'>
      <h2>Crea una nueva cuenta</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {actualizarDato(e)}}
      />
      <label htmlFor='password'>Contraseña</label>

      <input
        type='password'
        name='password'
        id='password'
        placeholder='Su contraseña.'
        onChange={(e) => {actualizarDato(e)}}
      />
      <button className='botonSesion' onClick={(e) => {crearCuenta()}}>
        Crear cuenta
      </button>
      <Errores>{errorUsuario}</Errores>
    </div>
  )
}

export default CrearCuenta