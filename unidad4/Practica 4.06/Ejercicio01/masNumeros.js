"use strict";

import { crearCheckbox, desmarcarTodos, marcarPares } from "../biblioteca/biblioteca.js";

window.onload = () =>{
    const contenedorCheckbox = document.getElementById("contenedor-checkbox");
    crearCheckbox(100, contenedorCheckbox);

    //Seleccionamos los checkbox.
    const elementosCheckbox = document.querySelectorAll('input[type="checkbox"]');
    //Seleccionamos los botones.
    const marcarParesBtn = document.getElementById("marcar-pares");
    const desmarcarBtn = document.getElementById("desmarcar");

    //Creamos los eventos que realizan las funciones de los botones.
    marcarParesBtn.addEventListener("click", ()=>{
        marcarPares(elementosCheckbox);

    }, false);

    desmarcarBtn.addEventListener("click", ()=>{
        desmarcarTodos(elementosCheckbox);

    }, false);
}