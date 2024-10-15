"use strict";

function censurarPalabra(palabra){

    var textoCensurado = document.body.innerHTML.replaceAll(palabra, "<span class='censura'>Contenido Bloqueado</span>");
    document.body.innerHTML = textoCensurado;
}

export {censurarPalabra};
