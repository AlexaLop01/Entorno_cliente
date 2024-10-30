"use strict";
import { aparecerContenido } from "../biblioteca/biblioteca.js";

window.onload = ()=>{
    const titulos = document.getElementsByTagName("h2");
    aparecerContenido(titulos);
        
};

