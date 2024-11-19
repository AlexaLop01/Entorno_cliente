import React, { useEffect, useState } from 'react';
import { generarColorAleatorio } from '../../biblioteca/biblioteca.js';
import "./Colorines.css";

const Colorines = () => {
  //Javascript
  //Creamos el estado de colores.
  const colorInicial = "";
  const [colores, setColores]= useState(colorInicial);

  //Realizamos una función para que genere el color aleatorio y lo guarde en el estado.
  const colorRandomDiv = () =>{
    const color = generarColorAleatorio();
    setColores(color);
  }

  //Usamos el useEffect para que cada que se cargue el estado cambie el color de fondo.
  useEffect (() =>{
      document.body.style.backgroundColor = colores;
  }, [colores]);

  //Usamos el useEffect para que al cargar la página se coloque el evento y lo limpie una sola vez.
  useEffect(()=>{
    document.addEventListener("dblclick", colorRandomDiv);

    return ()=>{
      document.removeEventListener("dblclick", colorRandomDiv);
      
    }
  }, []);

  return (
    //JSX
    <>
        <div id='contenedor-colorines'>
          <h3>Cambia de color con 2 clicks</h3>
          <p>El color actual es: {colores}</p>
        </div>
    </>
  )
}

export default Colorines;