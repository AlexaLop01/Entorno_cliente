"use strict";

//función para imprimir por consola cualquier tipo de parámetro que se le pase a la función.

function mostrarObjeto(objeto) {
    if(typeof objeto !== 'object' || objeto === null){
        console.log(`El parámetro introducido no es un objeto.`);
    }

    let datosObjeto ;

    for (var clave in objeto){

        //Comprobamos que el objeto tenga la propiedad
        if(objeto.hasOwnProperty(clave)){

            let valor = objeto[clave]; //guardamos el valor de la propiedad en una variable
            let tipoDato = typeof valor; // guardamos el tipo de dato del valor en una variable

            if(tipoDato === 'number'){
                datosObjeto += `${clave} (${tipoDato}): ${valor}.`; 
            }
            else if(tipoDato === 'string'){
                datosObjeto += `${clave} (${tipoDato}): ${valor}.`; 
            }
            else if(Array.isArray(valor)){
                datosObjeto += `${clave} (${tipoDato}): [${[...clave]}.`; 
            }
            el
            
            
        }
    }
}
