"use strict";
//Creamos la función para generar los números aleatorios pero con la condición de que no se repitan.
const generarNumerosAleatorios = (estado, setEstado) =>{
    //Creamos una estructura que nos permita sacar números aleatorios sin que se repitan.
    let numeroNuevo;
    do{
        numeroNuevo = Math.floor(Math.random() * 100) + 1;
    }while(estado.includes(numeroNuevo));//El do while nos permite que se ejecute al menos una vez, y compruebe si el estado contiene algún número igual.
    setEstado([...estado, numeroNuevo]);
}
export {generarNumerosAleatorios};