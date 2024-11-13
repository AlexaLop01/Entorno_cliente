"use strict";

import { actualizarPoblaciones } from "../biblioteca/biblioteca.js";

window.onload= ()=>{
    const formulario = document.getElementById("formulario-provincias");
    const selectProvincias = document.getElementById("provincia");
    const selectPoblacion = document.getElementById("poblacion");
    const error = document.getElementById("mensaje-error");

    //Creamos el objeto de arrays que contienen las poblaciones de cada provincia.
    const poblaciones = {
        "Alicante": ["Alicante", "Elche", "Petrer"],
        "Castellon": ["Castellon", "Oropesa", "Vinaroz"],
        "Valencia": ["Valencia", "Xátiva", "Torrent"]
    };

    //Evento que cambia las poblaciones al cambiar la provincia.
    selectProvincias.addEventListener("change", ()=>{
        actualizarPoblaciones();

    }, false);

    //Válidación del formulario al enviarlo.
    formulario.addEventListener("submit", (evento)=>{
        if(selectProvincias.value === "" || selectPoblacion.value === "" ){
            evento.preventDefault(); //Para evitar que el formulario se envie.
            error.classList.remove("oculta");
        }
        error.classList.add("oculta");
    }, false);
}