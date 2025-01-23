import React, {useContext} from "react";
import "./Cabecera.css";
import { contextoSesion } from "../contextos/ProveedorSesion.jsx";
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";

const Cabecera = () => {
  const {sesionIniciada} = useContext(contextoSesion);

  return (
    <>
      <header id='cabecera'>
        <h1>Almacenamiento con Supabase</h1>
        <div className='cabecera__sesion'>
        {// Si la sesión está iniciada, se muestra el botón de cerrar sesión.
        sesionIniciada && <CerrarSesion />}
        </div>
      </header>
    </>
  );
};

export default Cabecera;
