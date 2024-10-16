"use strict";

import { crearTabla, esPrimo } from "../biblioteca/biblioteca.js";

const tabla = document.getElementById("tabla-contenedor");
crearTabla(tabla);

const idSetTimeOut = setTimeout(()=>{
    const celdas = document.querySelectorAll("td");

    celdas.forEach((celda)=>{
        const numero = parseInt(celda.textContent);//Obtenemos el número de la celda, ya en el html no es un número si no que es un string.
        if(esPrimo(numero)){
            celda.setAttribute("class", "numero-primo");
        }
    });
}, 2000);