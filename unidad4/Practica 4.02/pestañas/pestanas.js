"use strict";

import { activarPestaña } from "../biblioteca/biblioteca.js";

window.onload = () =>{
    //Seleccionamos los botones.
    const pestañas = document.getElementsByTagName("button");
    console.log(pestañas);
    
    //Seleccionamos los parrafos.
    const contenido = document.getElementsByTagName("p");
    console.log(contenido);
    
    //Empareja cada botón con cada contenido y al clicar aparezca el contenido correspondiente.
    for (let i = 0; i < pestañas.length; i++) {
        pestañas[i].addEventListener("click", ()=>{
            activarPestaña(pestañas, contenido, i);
        }, false);
        
    }

    //Aquí aparece la primera pestaña activa por defecto nada más cargar la página.
    activarPestaña(pestañas, contenido, 0);

}