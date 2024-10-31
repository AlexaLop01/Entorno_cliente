"use strict";

//Creamos una función que pase el elemento que queremos que haga el evento y en la función del evento hace que aparezca su hermano.
function aparecerContenido(elemento) {
    for (let i = 0; i < elemento.length; i++) {
        elemento[i].addEventListener("click", ()=>{
            const contenido = elemento[i].nextElementSibling;

            contenido.classList.toggle("aparecer");
        },false);
        
    }
}

//Creamos una función que permita introducir las colecciones oportunas y pueda indicarse el índice del cuál queremos mostrar la pestaña.
function activarPestaña(elemento1, elemento2, indice){
    //Quitamos la clase activo de todas
    for (let i = 0; i < elemento1.length; i++) {
        elemento1[i].classList.remove("activo"); 
    }

    for (let i = 0; i < elemento2.length; i++) {
        elemento2[i].classList.remove("activo"); 
    }

    //Aquí colocamos esa clase activo solo a las los índices que deseamos que aparezca.
    elemento1[indice].classList.add("activo");
    elemento2[indice].classList.add("activo");

}

export {aparecerContenido, activarPestaña};