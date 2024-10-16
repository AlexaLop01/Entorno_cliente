"use strict";

import { generarColorAleatorio , generarIndiceAleatorio} from "../biblioteca/biblioteca.js";

const idSetInterval = setInterval(()=>{
    //Selecionamos primero los párrafos.
    const parrafos = document.body.getElementsByTagName("p");
    //En este paso de forma aleatoria conseguimos un índice para colocar después en parrafos.
    const indiceAleatorio = generarIndiceAleatorio(parrafos);
    //Guardamos el color aleatorio que se le aplicará al párrafo aleatorio.
    const color = generarColorAleatorio();
    //Le colocamos el color al párrafo.
    parrafos[indiceAleatorio].style.backgroundColor = color;

}, 2000);