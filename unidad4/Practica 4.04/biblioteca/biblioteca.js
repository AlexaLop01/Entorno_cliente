"use strict";

function generarIndiceAleatorio(array) {
    var indice = Math.floor(Math.random() * array.length);
    return indice;
}

//Esta función de barajar arrays esta sacada de chatGPT
function barajarImagenes(array){
    return array
    .map(item => ({ value: item, sortKey: Math.random() })) // Asigna un valor aleatorio temporal
    .sort((a, b) => a.sortKey - b.sortKey)                  // Ordena por el valor aleatorio
    .map(({ value }) => value); 
}

function crearImagenes(){
    const piezas = [...Array(9).keys()].map((indice)=>{
        const pieza = document.createElement("img");
        pieza.src=`img/${indice}.png`;
        pieza.classList.add("imagen");
        pieza.alt=`imagen ${indice}`;
        return pieza;
    })
    return piezas;
}
export {generarIndiceAleatorio, barajarImagenes, crearImagenes};