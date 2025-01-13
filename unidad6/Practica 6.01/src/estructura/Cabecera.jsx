import React from "react";
import "./Cabecera.css";
import CerrarSesion from "../componentes/Sesion/CerrarSesion.jsx";

const Cabecera = () => {
  return (
    <>
      <header id='cabecera'>
        <h1>UT06 Almacenamiento con Supabase</h1>
        <div className='cabecera__sesion'>
          <CerrarSesion/>
        </div>
      </header>
    </>
  );
};

export default Cabecera;
