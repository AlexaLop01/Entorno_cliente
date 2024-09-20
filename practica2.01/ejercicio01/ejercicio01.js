"use strict"

//Definimos las variables.
let masaMarcos = 80;
let alturaMarcos = 1.70;
let masaJuan = 70;
let alturaJuan = 1.85;

//Definimos la función que calculará la masa corporal.
function calcularIMC(masa, altura) {
    return masa / (altura * altura);
    
}

//Definimos en variables el resultado de la masa de cada uno.
let imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
let imcJuan = calcularIMC(masaJuan, alturaJuan);
let mayorIMC = imcMarcos > imcJuan ? true : false;

//Imprimimos resultados.
console.log(`La Masa corporal de Marcos es ${imcMarcos}.`);
console.log(`La Masa corporal de Juan es ${imcJuan}.`);
console.log(`¿Tiene Marcos un IMC mayor que el de Juan? ${mayorIMC}.`);