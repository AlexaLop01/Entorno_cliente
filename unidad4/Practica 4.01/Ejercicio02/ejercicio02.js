"use strict";

import { generarColorAleatorio } from "../biblioteca/biblioteca.js";

window.onload =() =>{
    const contenedor = document.getElementById("contenedor");
    document.addEventListener("dblclick", ()=>{//Cuando haga doble click cambiará el color de fondo del contenedor.
        const color = generarColorAleatorio();
        contenedor.style.backgroundColor = color;
    }, false);
    
}//Fin del window.onload