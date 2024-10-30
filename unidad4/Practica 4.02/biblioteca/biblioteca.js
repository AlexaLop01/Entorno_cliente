"use strict";

function aparecerContenido(elemento) {
    for (let i = 0; i < elemento.length; i++) {
        elemento[i].addEventListener("click", ()=>{
            const contenido = elemento[i].nextElementSibling;

            contenido.classList.toggle("aparecer");
        },false)
        
    }
}

export {aparecerContenido};