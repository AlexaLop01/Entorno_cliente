import React from "react";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <>
      <header id='cabecera'>
        <h1>UT06 Almacenamiento con Supabase</h1>
        <div className='cabecera__sesion'></div>
      </header>
    </>
  );
};

export default Cabecera;
