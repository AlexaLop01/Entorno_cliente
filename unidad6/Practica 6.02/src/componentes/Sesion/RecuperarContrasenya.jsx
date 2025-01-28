import React,{ useContext } from 'react';
import { contextoSesion } from '../../contextos/ProveedorSesion.jsx';
import Errores from '../Errores.jsx';

const RecuperarContrasenya = () => {
    const {recuperarContrasenya, actualizarDato, errorUsuario} = useContext(contextoSesion);
  return (
    <div className='ContenedorRecuperarContrasenya'>
      <h2>Recuperar contraseña</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {actualizarDato(e)}}
      />
      <button className='botonSesion' onClick={(e) => {recuperarContrasenya()}}>
        Recuperar contraseña
      </button>
      <Errores>{errorUsuario}</Errores>
    </div>
  )
}

export default RecuperarContrasenya;