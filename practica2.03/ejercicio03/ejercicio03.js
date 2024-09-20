"use strict"

//constructor
function discente(id, nom, apellidos, nota1, nota2, nota3) {
    return{
        id: id,
        nombre: nom,
        apellidos: apellidos,
        aficiones: [],
        notas:{
            primera: nota1,
            segunda: nota2,
            tercera: nota3
        }
    }
}

//función para calcular la media de las 3 evaluaciones

//función para imprimir las aficiones

//función para imprimir el informe completo