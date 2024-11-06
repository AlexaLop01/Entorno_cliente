"use strict";
import { crearTabla ,resetearLienzo} from "./biblioteca/biblioteca.js";

window.onload = () =>{
    const lienzo = document.getElementById("lienzo");
    const colores = document.getElementById("colores");
    const borrar = document.getElementById("reiniciar");
    let colorSeleccionado = null; //Esta variable es para que coja el color que selecciones, para que después pueda pintar el lienzo del mismo color.
    let pintar = false;
    
    //Sección de colores
    //Evento para que el color aparezca seleccionado.  
    colores.addEventListener("click", (evento)=>{
        if(evento.target.tagName === "TD"){
            //He creado el data-color-class para que no interfiera con otras clases ya que si indicase que se cogiese del class, cogería todas las clases que tuviese el class.
            colorSeleccionado = evento.target.getAttribute("data-color-class");

            //Revisa si hay alguno que tenga esa clase y la elimina, para que no haya dos colores seleccionado a la vez.
            const seleccionada = colores.querySelector(".seleccionada");
            if (seleccionada){
                seleccionada.classList.remove("seleccionada");
            }

            evento.target.classList.add("seleccionada");
        }
    }, false);
    

    //Sección de la tabla
    crearTabla(lienzo, 50, 60);
    
    const tabla = document.getElementsByTagName("table");
    const tablaLienzo = tabla[1];
    //Evento para activar y desactivar la pintura en el lienzo.
    tablaLienzo.addEventListener("click", (evento)=>{
        pintar = !pintar; //Esta línea es para que cada vez que clique si es true cambie a false y si es false cambie a true.
        if(evento.target.tagName === "TD"){
            if(pintar === true){
                evento.target.classList.add(colorSeleccionado);

            }
        }
    }, false);

    //Evento para que cuando se mueva el ratón por el lienzo pinte del color seleccionado.
    tablaLienzo.addEventListener("mousemove", (evento)=>{
        if(evento.target.tagName === "TD"){
            if (pintar && colorSeleccionado) {
                evento.target.classList.add(colorSeleccionado);
            }
        }

    }, false);

    //Sección de resetear el lienzo a blanco
    borrar.addEventListener("click", ()=>{
        resetearLienzo();
        
    })
}