"use strict";

import { generarIndiceAleatorio, animarOpacidad} from "../biblioteca/biblioteca.js";

var imagenes = ["../img/azucar_en_pastel.jpg" , "../img/brazo_angel.jpg", "../img/pasteles_chocolate.jpg", "../img/pasteles_fresas.jpg"];
const contenedor = document.getElementById("contenedor-imagenes");

const idSetInterval = setInterval(()=>{
    //La imagen generada para el ejercicio lo haré reutilizando la función de generar un índice para que coja los elementos del array y me saque una imagen aleatoria cada vez que se repita el interval.
    const indiceAleatorio = generarIndiceAleatorio(imagenes);
    contenedor.innerHTML = `<img class = "imagen-seleccionada img-contenedor" src='${imagenes[indiceAleatorio]}' >`;
    
    //Al hacer el getElementsByClassName nos devolverá un HTMLCollection.
    const imagenNueva = document.getElementsByClassName("imagen-seleccionada");
    
    //Este if es para comprobar el tamaño de ese HTMLCollection.
    if(imagenNueva.length > 0){
        animarOpacidad(imagenNueva[0]);  //Aquí indicamos que nos muestre ese primer indice si no el programa se vuelve loco porque le pasamos muchas imágenes.
    }
  
}, 2000);