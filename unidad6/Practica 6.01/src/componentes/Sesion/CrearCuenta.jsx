import React from 'react'

const CrearCuenta = () => {
  return (
    <div className='cuentaUsuario'>
      <h2>Crea una nueva cuenta</h2>
      <label htmlFor='email'>Correo electrónico</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Su correo electrónico.'
        onChange={(e) => {}}
      />
      <label htmlFor='password'>Contraseña</label>

      <input
        type='password'
        name='password'
        id='password'
        placeholder='Su contraseña.'
        onChange={(e) => {}}
      />
      <button className='botonSesion' onClick={(e) => {}}>
        Crear cuenta
      </button>
    </div>
  )
}

export default CrearCuenta