"use strict";

import { mostrarDiscos, validacionFormulario } from "../biblioteca/biblioteca.js";

window.onload = () =>{
    const btnGuardarDisco = document.getElementById("guardar-disco");
    const btnMostrarDisco = document.getElementById("mostrar-disco");
    const formulario = document.getElementById("formulario-disco");
    const contenedorResultado = document.getElementById('resultado');

    const listaDiscos = {
        discos:[]
    };

    //Cuando el usuario le dé al botón de guardar entonces este evento hará la función de validar y cuando todo este correcto, dentro de validar se guardará el disco.
    btnGuardarDisco.addEventListener("click", ()=>{
        validacionFormulario(formulario, listaDiscos);
    }, false);

    //El botón mostrará los discos que se hayan guardado.
    btnMostrarDisco.addEventListener("click", ()=>{
        mostrarDiscos(contenedorResultado, listaDiscos);
    }, false);
}