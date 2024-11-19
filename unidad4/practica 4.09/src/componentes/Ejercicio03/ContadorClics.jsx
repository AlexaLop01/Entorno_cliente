import React, { useEffect, useState } from 'react';
import "./ContadorClics.css";

const ContadorClics = () => {
  //Javascript

  //Realizamos un estado para el contador y otro para el mensaje que aparecerá por pantalla.
  const contadorInicial = 0;
  const  [contador, setContador] = useState(contadorInicial);
  const mensajeInicial = `Estimado usuario/a, has pulsado 0 veces el ratón.`;
  const [mensaje, setMensaje] = useState(mensajeInicial);

  //Realizamos una función que controle el número de clics que realiza el usuario y saque un mensaje por pantalla.
  const contadorClics = () =>{
      setContador((contador)=>{
        const nuevoContador = contador + 1;

        //El mensaje por pantalla aparecerá cuando el número de clics llegue a 5 o multiplos de 5.
        if(nuevoContador % 5 === 0){
          setMensaje(`Estimado usuario/a, has pulsado ${nuevoContador} veces el ratón.`);
        }

        return nuevoContador;
      });
  }

  //Usamos el useEffect para poner el evento y limpiarlo solo una vez al cargar la página.
  useEffect(()=>{
      document.addEventListener("click", contadorClics);

      return ()=>{
        document.removeEventListener("click", contadorClics);
      }
  }, []);

  return (
    //JSX
    <>
    <div id='contenedor-contador-clics'>
      <h3>Contador de clics</h3>
      <p>{mensaje}</p>
    </div>
    </>
  )
}

export default ContadorClics;