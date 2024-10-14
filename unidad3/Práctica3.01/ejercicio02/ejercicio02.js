"use strict";

//Voy a hacer una variable para que se repita solo una cantidad de veces y no sea infinito.
let repeticiones = 0; 

//Intervalo que cree un elemento li con un número aleatorio entre 1 y 1000.
const idInterval = setInterval(()=>{

    const lista = document.getElementById("lista-ordenada");
    lista.innerHTML += `<li>${Math.floor(Math.random()*999)}</li>`;

    repeticiones++;
    if(repeticiones >= 10){ //Aqui esta la condición de cuál es el límite que debe cumplir antes de quitar el inteval.
        clearInterval(idInterval);
    }
}, 2000);


