"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
    const comenzar = document.getElementById("comenzar");
    const detener = document.getElementById("detener");
    const saludos = document.getElementById("saludos");

    let id = null;

    comenzar.addEventListener("click", (evento) =>{
        if (!id){
            id = setInterval(()=>{
                saludos.innerHTML += `<h1>¡Hola Feo!</h1>`;
    
            }, 1000);
        }
    }, false);

    detener.addEventListener("click", (evento) =>{
        clearInterval(id);
        id = null;
    }, false);

});//Fin de DOMContentLoaded