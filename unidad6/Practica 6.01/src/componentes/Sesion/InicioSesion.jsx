import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';

const InicioSesion = () => {
  const { actualizarDato, iniciarSesionConContrasenya } = useContext(contextoSesion);
  return (
    <div className='cuentaUsuario'>
      <h2>Iniciar sesión</h2>
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

      <button className='botonSesion' onClick={(e) => {iniciarSesionConContrasenya()}}>
        Iniciar sesión
      </button>
      <div>
        <Link to='/recuperar-contrasenya'>¿Olvidó su contraseña?</Link>
      </div>
    </div>
  )
}

export default InicioSesion