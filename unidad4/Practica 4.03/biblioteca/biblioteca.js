"use strict";

function crearTabla(contenedor, filas, columnas){
    const tabla = document.createElement("table");
    
    for(let i=0; i < filas; i++){
        const fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement("td");
            celda.classList.add("celdaLienzo");
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
}

function resetearLienzo(){
    const celdasLienzo = document.getElementsByClassName("celdaLienzo");
        Array.from(celdasLienzo).forEach(celda => {
            celda.className = "celdaLienzo blanco";
        });
}
export {crearTabla, resetearLienzo};