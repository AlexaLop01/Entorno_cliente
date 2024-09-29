"use strict";

//Creamos el array con los nombres propios.
let nombresPropios = ["Felipe", "Andres", "Diana", "Alexandra", "Diego"];

//Importamos las funciones de la biblioteca.
import { cambiarMayusculas, ordenarAlfabetoReves, convertirAObjetos } from "../biblioteca/biblioteca.js" ;

//Prueba de convertir a mayúsculas.
console.log(cambiarMayusculas(nombresPropios));

//Prueba de ordenar alfabéticamente al revés.
console.log(ordenarAlfabetoReves(nombresPropios));

//Prueba de convertir los nombres a objetos.
convertirAObjetos(nombresPropios);

//Prueba de que el array inicial no ha sido modificado.
console.log(nombresPropios);
