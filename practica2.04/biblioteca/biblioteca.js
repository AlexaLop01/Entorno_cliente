"use strict";

//En este fichero crearemos las funciones que necesitemos en los ejercicios. 
//Acordarnos de que hay que exportarlas para poder utilizarlas en los otros ficheros js.
//Para exportar : export { nombreFuncion };.

function cambiarMayusculas(array) {
    let arraMayusculas = array.map((nombre) => {
        return nombre.toUpperCase(); 
    });
    return `El array en mayúsculas es : [${arraMayusculas}]`;
}

export {cambiarMayusculas};