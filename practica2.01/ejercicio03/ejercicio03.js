"use strict"

//Definimos la función que vamos a utilizar para calcular cuantas repeticiones y por cuanto debe multiplicarse.
function interaccionMultiplicar(repeticiones, interaccion){
    //Para mostrar la iteracción
    console.log(interaccion);
    //Usamos el for para sacar los numeros multiplicados
    for (var i = 1; i < repeticiones ; i++) {
        console.log(interaccion *=2);
    }
}

//hacemos la prueba de salida por consola.
interaccionMultiplicar(4,6);
