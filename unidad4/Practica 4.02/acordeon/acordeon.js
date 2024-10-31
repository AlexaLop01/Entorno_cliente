"use strict";
import { aparecerContenido } from "../biblioteca/biblioteca.js";

window.onload = ()=>{
    //Escogemos los títulos del acordeón.
    const titulos = document.getElementsByTagName("h2");

    //Hacemos que aparezcan al clicar los parráfos hemanos a cada título.
    aparecerContenido(titulos);
        
};

