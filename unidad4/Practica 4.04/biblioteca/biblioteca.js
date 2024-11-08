"use strict";

function generarIndiceAleatorio(array) {
    var indice = Math.floor(Math.random() * array.length);
    return indice;
}

//Esta función de barajar arrays esta sacada de chatGPT
function barajarImagenes(array){
    return array
    .map(item => ({ value: item, sortKey: Math.random() })) // Asigna un valor aleatorio temporal
    .sort((a, b) => a.sortKey - b.sortKey) // Ordena por el valor aleatorio
    .map(({ value }) => value); // Extrae los valores originales
}

function crearImagenes(){
    const piezas = [...Array(9).keys()].map((indice)=>{
        const pieza = document.createElement("img");
        pieza.src=`img/${indice + 1}.png`;
        pieza.id=`${indice + 1}`;
        pieza.classList.add("imagen");
        pieza.draggable = true;
        pieza.setAttribute("data-position", `${indice + 1}`);
        pieza.alt=`imagen ${indice + 1}`;
        return pieza;
    })
    console.log(piezas);
    return piezas;
}

function colocarImagenesContenedor(contenedor){
    contenedor.innerHTML=``;
    const arrayPiezas= barajarImagenes(crearImagenes());

    arrayPiezas.map(pieza => {
        contenedor.appendChild(pieza);
    });
}

function verificarSolucion() {
    const casillas = document.querySelectorAll(".soltable");
    for (const casilla of casillas) {
        const pieza = casilla.firstChild;
        
        // Si la casilla está vacía o la pieza no está en la posición correcta, retorna falso
        if (!pieza || pieza.getAttribute("data-position") !== casilla.getAttribute("data-position")) {
            return false;
        }
    }
    return true;
}
export {generarIndiceAleatorio, barajarImagenes, crearImagenes, colocarImagenesContenedor , verificarSolucion};