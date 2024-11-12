"use strict";

import { guardarDisco, mostrarDiscos } from "../biblioteca/biblioteca.js";

window.onload = () =>{
    const btnGuardarDisco = document.getElementById("guardar-disco");
    const btnMostrarDisco = document.getElementById("mostrar-disco");
    const formulario = document.getElementById("formulario-disco");
    const contenedorResultado = document.getElementById('resultado');

    const listaDiscos = {
        discos:[]
    };
    btnGuardarDisco.addEventListener("click", ()=>{
        guardarDisco(formulario, listaDiscos);
    }, false);

    
    btnMostrarDisco.addEventListener("click", ()=>{
        mostrarDiscos(contenedorResultado, listaDiscos);
    }, false);
}