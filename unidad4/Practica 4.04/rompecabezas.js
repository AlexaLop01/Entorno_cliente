"use strict";
import { barajarImagenes, crearImagenes} from "./biblioteca/biblioteca.js";

window.onload = ()=>{
    let contenedorPiezas = document.getElementById("piezas");
    
    contenedorPiezas.innerHTML=``;
    const arrayPiezas= barajarImagenes(crearImagenes());
    console.log(arrayPiezas);

    arrayPiezas.map(pieza => {
        contenedorPiezas.appendChild(pieza);
    });
    
}