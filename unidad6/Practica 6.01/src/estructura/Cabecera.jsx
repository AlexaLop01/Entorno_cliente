import React, {useContext} from "react";
import "./Cabecera.css";
import { contextoSesion } from "../contextos/ProveedorSesion.jsx";
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";

const Cabecera = () => {
  const {sesionIniciada} = useContext(contextoSesion);

  return (
    <>
      <header id='cabecera'>
        <h1>UT06 Almacenamiento con Supabase</h1>
        <div className='cabecera__sesion'>
        {sesionIniciada && <CerrarSesion />}
        </div>
      </header>
    </>
  );
};

export default Cabecera;
