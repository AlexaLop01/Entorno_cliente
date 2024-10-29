"use strict";

window.onload = () =>{
    const posicionElemento = document.getElementById("posicion");
    document.addEventListener("mousemove", (evento)=>{ //El mousemove  es para que sepa que debe realizar el evento cuando el mouse se mueva.
        const x = evento.clientX;//Devuelve la coordenada X.
        const y = evento.clientY;//Devuelve la coordenada Y.

        posicionElemento.textContent = `Posición del ratón: X:${x} Y:${y}`; 
    }, false);
}//Fin del window.onload