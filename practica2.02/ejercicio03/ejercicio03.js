"use strict"

function calcular(generar, sumar, imprimir) {
    let array1 = generar(10);
    let array2 = generar(10);
    imprimir(sumar(array1,array2));
}