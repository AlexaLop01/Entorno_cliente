import React, { useEffect, useState } from 'react';

const Localizador = () => {
    //Javascript
    const valorInicial = "";
    const [localizacionX, setLocalizacionX] = useState(valorInicial);
    const [localizacionY, setLocalizacionY] = useState(valorInicial);


    const localizacionMouse = (evento) =>{
        const x = evento.clientX;
        const y = evento.clientY;
        setLocalizacionX(x);
        setLocalizacionY(y);
        console.log(`Se ha creado el evento`);
    }

    useEffect(() =>{
        document.addEventListener("mousemove", localizacionMouse);

        return () =>{
            document.removeEventListener("click", localizacionMouse);
            console.log(`Se ha desmontado el evento`);
        };
    }, [])
  return (
    //JSX
    <>
        <div>Localizador</div>
        <p> La localización del mouse es </p>
        <p>X: {localizacionX} Y: {localizacionY}</p>
    </>
    
  )
}

export default Localizador;