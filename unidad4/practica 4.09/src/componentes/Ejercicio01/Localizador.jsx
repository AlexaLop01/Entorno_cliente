import React, { useEffect, useState } from 'react';
import "./Localizador.css";

const Localizador = () => {
    //Javascript
    //Creamos un objeto que contenga las dos posiciones inicializadas a 0.
    const valorInicial = {
        x: 0,
        y: 0
    };

    const [localizacion, setLocalizacion] = useState(valorInicial);

    //En la función vamos a obtener la posición del mouse y guardarla en el estado.
    const localizacionMouse = (evento) =>{
        const posicionX = evento.clientX;
        const posicionY = evento.clientY;
        setLocalizacion({x: posicionX, y: posicionY});
    }

    //Usamos el useEffect para crear el evento y limpiarlo una sola vez.
    useEffect(() =>{
        document.addEventListener("mousemove", localizacionMouse);

        return () =>{
            document.removeEventListener("mousemove", localizacionMouse);
        };
    }, [])
  return (
    //JSX
    <>
    <div id='contenedor-localizador'>
        <h3>Localizador</h3>
        <p> La localización del mouse es </p>
        {/*Indicamos a que parte del objeto debe acceder para mostrarlo por pantalla*/}
        <p>X: {localizacion.x} Y: {localizacion.y}</p>

    </div>
    </>
    
  )
}

export default Localizador;