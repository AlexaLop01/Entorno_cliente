"use strict";
import { colocarImagenesContenedor, verificarSolucion} from "./biblioteca/biblioteca.js";

window.onload = ()=>{
    const contenedorPiezas = document.getElementById("piezas");
    const puzzle = document.getElementById("puzzle");
    //Ponemos las imagenes en el contenedor de forma aleatoria.
    colocarImagenesContenedor(contenedorPiezas);

    //Agregamos el evento que nos permita arrastrar el elemento.
    document.getElementById("zona-arrastrable").addEventListener("dragstart", (evento) => {
        evento.dataTransfer.setData("identificador", evento.target.id);
        evento.dataTransfer.setData("nombre", evento.target.localName);
        console.log( evento.dataTransfer.getData("identificador"));
    }, false);

    //Agregamos el evento que al moverse el elemento prevenga el funcionamiento por defecto.
    document.getElementById("zona-arrastrable").addEventListener("dragover", (evento) => {
        evento.preventDefault();
    }, false);

    //Agregamos el evento que al soltar nos permita dejar el elemento el contenedor donde queremos soltarlo.
    document.getElementById("zona-arrastrable").addEventListener("drop", (evento) => {
        evento.preventDefault();
        if(evento.target.classList.contains("soltable") && !evento.target.hasChildNodes()){
            evento.target.appendChild(
                document.getElementById(evento.dataTransfer.getData("identificador"))
            );

            //Aquí verifica que todas las casillas estén llenas.
            const todasLlenas = Array.from(document.querySelectorAll(".soltable")).every(casilla => casilla.hasChildNodes());

            if(todasLlenas){
                if (verificarSolucion()) {
                    alert("¡Felicidades! La imagen está completa y es correcta.");
                } else {
                    alert("La solución no es correcta. Inténtalo de nuevo.");
                }
            }
        }
    }, false);


}