"use strict";
function convertirCani(cadena) {
    let resultado = '';

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        
        //Sustituimos las c por k.
        if(caracter.toLowerCase() === 'c'){
            caracter = 'k';
        }

        //Para alternar entre mayúsculas o minúsculas.
        if(i % 2 === 0){
            resultado += caracter.toUpperCase();//Para poner mayúsculas en las posiciones pares.
        }else{
            resultado += caracter.toLowerCase();//Para poner minúsculas en las posiciones impares.
        }
    }

    //Para generar entre 2 y 5 letras 'H' al final.
    const cantidadH = Math.floor(Math.random() * 4) + 2;
    resultado += 'H'.repeat(cantidadH);

    return resultado;
}

function insertarAfter(nuevoElemento, existenteElemento) {
    existenteElemento.appendChild(nuevoElemento);//Cogemos el elemento antiguo para usarlo de referencia y después colocar el siguiente.
}



export {convertirCani, insertarAfter} ;