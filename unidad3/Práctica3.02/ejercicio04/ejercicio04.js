"use strict";

import { generarIndiceAleatorio, animarOpacidad } from "../biblioteca/biblioteca.js";

var imagenes = ["../img/azucar_en_pastel.jpg" , "../img/brazo_angel.jpg", "../img/pasteles_chocolate.jpg", "../img/pasteles_fresas.jpg"];
const contenedor = document.getElementById("contenedor-imagenes");
console.log(contenedor);


const idSetInterval = setInterval(()=>{
    const indiceAleatorio = generarIndiceAleatorio(imagenes);
    contenedor.innerHTML = `<img src='${imagenes[indiceAleatorio]}' class='img-contenedor'>`;
    

}, 2000);