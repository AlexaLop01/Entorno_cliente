"use strict"

//definimos el array de las facturas
var facturas = [124, 48, 268];

function calcularPropinas(facturas) {
    //Declaramos los arrays vacios para luego rellenarlo con la solución que de posteriormente.
    let propinas = [];
    let cantidadFinal = [];

    for (let i = 0; i < facturas.length; i++) {
        let propina;

        if(facturas[i] < 50){
            propina = facturas[i] * (20/100);
        }
        else if (facturas[i] >= 50 && facturas[i] <= 200) {
            propina = facturas[i] * (15/100);
        }
        else {
            propina = facturas[i] * (10/100);
        }

        //El push funciona para añadir cada elemento de propina que se establece en la parte superior , introducirlo en el array que definimos arriba.
        propinas.push(propina);
        cantidadFinal.push(facturas[i] + propina);
    }
    
    //Mostramos el resultado por consola.
    console.log(`Facturas: ${facturas}`);
    console.log(`Propinas: ${propinas}`);
    console.log(`Cantidad final a pagar:  ${cantidadFinal}`);
            
}

//Hacemos comprobación del resultado.
calcularPropinas(facturas);