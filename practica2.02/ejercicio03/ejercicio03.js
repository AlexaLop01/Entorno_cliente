"use strict"

//Primero creamos la funcion de generarNumerosAleatorios
function generarNumerosAleatorios(cantidad) {
    let numerosAleatorios = [];

    for (let i = 0; i < cantidad; i++) {
        numerosAleatorios[i] = Math.floor(Math.random()*101);
        
    }

    return numerosAleatorios;
}

//Función para sumar los arrays.
function sumarArrays(array1, array2) {
    if(array1.length !== array2.length){
        console.log(`Error!! Los arrays tienen diferente tamaño.`);
      return;  
    }

    let resultado = [];
    let array2Invertido = array2.reverse();

    for (let i = 0; i < array1.length; i++) {
        resultado[i] = array1[i] + array2Invertido[i];  
    }
    
    return `El resultado de la suma contraria de los arrays es: ${resultado}`;
}
//Función imprimir
function imprimirSumaArrays(indice, array) {
   console.log(`El array ${indice} es: ${array}`);

   
}

//Realizamos la funcion que va a juntar todas las funciones, especificando dentro los parámetros de cada función.
function calcular(funciongenerar, funcionsumar, funcionimprimir) {
    let array1 = funciongenerar(10);
    let array2 = funciongenerar(10);

    funcionimprimir(1, array1);
    funcionimprimir(2, array2);

    let suma = funcionsumar(array1, array2);

    console.log(suma);
}

//hacemos prueba de salida.
calcular(generarNumerosAleatorios, sumarArrays, imprimirSumaArrays);