"use strict"

//vamos a realizar primero la función de multiplicar.
function multiplicar(num) {
    let tabla;
    console.log(`\nTabla de multiplicar del ${num}`);
    for(let i=0; i<=10; i++){
        tabla = `${num} x ${i} = ${num * i}`;
        console.log(tabla);
    }
}

//Creamos la función que imprime las tablas de multiplicar.
function impimirTablas(n, funcion) {
    if(n <= 2 || !Number.isInteger(n)){ //El metodo Number.isInteger es para comprobar si el número es entero.
        console.log(`Error!! El número debe ser entero mayor que 2.`);
        return;
    }

    //Hacemos un for que empiece por el número introducido hasta el 2.
    for (let i = n; i >= 2 ; i--) {
        multiplicar(i);
        
    }
}

//comprobamos la opción correcta
impimirTablas(4 , multiplicar);

//comprobamos el error
impimirTablas(5.3, multiplicar);