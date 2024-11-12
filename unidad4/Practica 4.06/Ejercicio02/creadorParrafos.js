"use strict";

import { crearParrafoConEstilo } from "../biblioteca/biblioteca.js";

window.onload = ()=>{
    const contenedor = document.getElementById("resultado");
    const btnCrearParrafo = document.getElementById("btn-parrafo");
    
    //Creamos el evento del botón.
    btnCrearParrafo.addEventListener("click", ()=>{
        //El método trim lo utilizamos para quitarle los espacios en blanco al pricipio y al final del texto.
        //Cogemos solo el value de cada elemento.
        const texto = document.getElementById("texto-introducir").value.trim();
        const estilo = document.getElementById("estilo-texto").value;
        
        crearParrafoConEstilo(texto, estilo, contenedor);

    }, false);
}