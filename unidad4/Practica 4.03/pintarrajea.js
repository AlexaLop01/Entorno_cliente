"use strict";
import { crearTabla } from "./biblioteca/biblioteca.js";

window.onload = () =>{
    const lienzo = document.getElementById("lienzo");
    const colores = document.getElementById("colores");
    let colorSeleccionado = null; //Esta variable es para que coja el color que selecciones, para que después pueda pintar el lienzo del mismo color.
    let pintar = false;
    

    colores.addEventListener("click", (evento)=>{
        if(evento.target.tagName === "TD"){
            colorSeleccionado = evento.target.getAttribute("data-color-class");

            const seleccionada = colores.querySelector(".seleccionada");
            if (seleccionada){
                seleccionada.classList.remove("seleccionada");
            }

            evento.target.classList.add("seleccionada");
        }
    }, false);

    crearTabla(lienzo, 50, 60);
    
    const tabla = document.getElementsByTagName("table");
        
    tabla[1].addEventListener("click", (evento)=>{
        ;
        
    }, false);
    

}