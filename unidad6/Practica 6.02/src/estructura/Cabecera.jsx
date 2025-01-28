import React, { useContext} from 'react';
import { contextoSesion } from '../contextos/ProveedorSesion.jsx';
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";
import "./Cabecera.css";


const Cabecera = () => {
  const {sesionIniciada, usuario} = useContext(contextoSesion);
  
  return (
    <>
      <div id='contenedorCabecera'>
        <h2>Práctica Supabase</h2>
        
        {sesionIniciada && <h3 className='usuarioLogin'>Hola, {usuario.email}</h3>}

        <div className='contenedorSesionCabecera'>
        {// Si la sesión está iniciada, se muestra el botón de cerrar sesión.
        sesionIniciada && <CerrarSesion />}
        </div>
      </div>
    </>
  )
}

export default Cabecera