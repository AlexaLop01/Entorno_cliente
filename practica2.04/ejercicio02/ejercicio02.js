"use strict";

import { generarNumerosAleatorios, filtrarArray} from "../biblioteca/biblioteca.js" ;

//Creamos 3 arrays con números aleatorios.
let array1 = generarNumerosAleatorios(10);
let array2 = generarNumerosAleatorios(10);
let array3 = generarNumerosAleatorios(10);

//Juntamos los 3 arrays.
let arraysJuntos = [...array1, ...array2, ...array3];

//Mostramos los arrays.
console.log(`El primer array es: ${array1}.`);
console.log(`El segundo array es: ${array2}.`);
console.log(`El tercer array es: ${array3}.`);
console.log(`Los arrays juntos son: ${arraysJuntos}.`);

filtrarArray(arraysJuntos);





