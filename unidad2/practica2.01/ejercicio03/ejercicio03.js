"use strict"

//Definimos la función que vamos a utilizar para calcular cuantas repeticiones y por cuanto debe multiplicarse.
function interaccionMultiplicar(repeticiones, interaccion){
    //Para mostrar la iteracción
    console.log(`El primer número es: ${interaccion}`);
    //Usamos el for para sacar los numeros multiplicados
    for (var i = 1; i < repeticiones ; i++) {
        interaccion*=2;
        console.log(`Siguiente número multiplicado por 2: ${interaccion}`);
    }
}


//hacemos la prueba de salida por consola.
interaccionMultiplicar(4,6);
