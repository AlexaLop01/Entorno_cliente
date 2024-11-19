import React, { useEffect, useState } from 'react';
import "./Cronometro.css";

const Cronometro = () => {
  //Javascript
  const tiempoCorriendo = true;
  const [estaCorriendo, setCorriendo] = useState(tiempoCorriendo);
  const tiempoInicial = 0;
  const [tiempo, setTiempo] = useState(tiempoInicial);

  //Creamos una función que maneje los controladores de los botones de para y reiniciar.
  const pararTiempo = () =>{
    setCorriendo(false);
  }

  const reiniciarTiempo = () =>{
    setTiempo(tiempoInicial);
    setCorriendo(true);
  }

  //Función para formatear el tiempo que saldrá por pantalla.
  //Esta función ha sido traida desde chatGPT.
  const formatearTiempo = (milliseconds) => {
    const centiseconds = Math.floor((milliseconds % 1000) / 10); // Centésimas
    const seconds = Math.floor((milliseconds / 1000) % 60); // Segundos
    const minutes = Math.floor(milliseconds / 60000); // Minutos
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(centiseconds).padStart(2, '0')}`;
  };

  //Usamos el useEffect para controlar el setInterval q se active y se pueda limpiar cada que se cargue el estado.
  useEffect(()=>{
    let intervaloId;

    if(estaCorriendo){
      intervaloId = setInterval(()=>{
        setTiempo((tiempo) =>{
          return tiempo + 10;
        })
      }, 10);
    }

    return ()=>{
      clearInterval(intervaloId);
    }

  },[estaCorriendo]);

  return (
    <div id='contenedor-cronometro'>
      <h3>Cronometro</h3>
      <p>Tiempo transcurrido : {formatearTiempo(tiempo)}</p>

      <button onClick={()=>{
        pararTiempo();
      }}>Parar</button>

      <button onClick={()=>{
        reiniciarTiempo();
      }}>Reiniciar</button>

    </div>
  )
}

export default Cronometro;