"use strict"

//constructor
function discente(id, nom, apellidos, nota1, nota2, nota3) {
    return{
        id: id,
        nombre: nom,
        apellidos: apellidos,
        aficiones: ["musica", "fútbol", "baile"],
        notas:{
            primera: nota1,
            segunda: nota2,
            tercera: nota3
        }
    }
}

function calcularMedia(notas) {
    console.log((discente.notas.nota1 + discente.notas.nota1 + discente.notas.nota1)/ 3);
}

let disciente1 = discente("01", "Manuel", "martinez", 5, 6, 8);

function imprimirAficiones(disciente){
    console.log(disciente.aficiones);
}
imprimirAficiones(disciente1);
calcularMedia(disciente1);
//función para calcular la media de las 3 evaluaciones

//función para imprimir las aficiones

//función para imprimir el informe completo