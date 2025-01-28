import React, { useContext} from 'react';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";
import "./Cabecera.css";


const Cabecera = ({children}) => {
  const {sesionIniciada} = useContext(contextoSesion);
  return (
    <>
      <div id='contenedorCabecera'>
        <h2>Práctica Supabase</h2>
        <div className='contenedorSesionCabecera'>
        {// Si la sesión está iniciada, se muestra el botón de cerrar sesión.
        sesionIniciada && <CerrarSesion />}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

export default Cabecera