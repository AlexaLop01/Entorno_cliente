import React, { useContext} from 'react';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";
import Navegacion from './Navegacion.jsx';

const Cabecera = () => {
  const {sesionIniciada} = useContext(contextoSesion);
  return (
    <>
      <div className='contenedorCabecera'>
          <h1>Práctica usando Supabase</h1>
          <div className='contenedorSesionCabecera'>
          {// Si la sesión está iniciada, se muestra el botón de cerrar sesión.
          sesionIniciada && <CerrarSesion />}
          </div>
      </div>
    </>
  )
}

export default Cabecera