"use strict"

//Creamos la función sin especificar parámetros para que pueda ponerse o ninguno o muchos.
function sumarNumeros() {
    //usando argumentos verificamos si han pasado más de un parámetro
    if(arguments.length < 2){
        console.log(`Error!! Necesitas mínimo más de un número para poder realizar la suma.`);
        return;
        
    }

    let suma = 0;

    //Realizamos un for para leer cada parámetro introducido.
    for(let i=0; i < arguments.length ; i++){
        let num = arguments[i];

        //verificamos si los parámetros introducidos son números o no antes de realizar la suma.
        if(isNaN(num)){
            console.error(`Error!! El valor ${num} introducido no es un número.`);
            return;
        }

        suma += num;
    }

    console.log(`La suma de los números es: ${suma}`);
}

//Hacemos una prueba con el primer error.
sumarNumeros(1);
//Hacemos una prueba para que salga correctamente.
sumarNumeros(2,5,8,9);
//hacemos una prueba metiendo un valor que no sea un número.
sumarNumeros("Hola", 3 , "pepito");