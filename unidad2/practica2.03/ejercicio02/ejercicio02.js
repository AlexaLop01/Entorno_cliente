"use strict";

//constructor de curso
function curso(curso, any) {
    return{
        nombreCurso:curso,
        any: any, 
        descripcion: "ninguna",
        alumnado:[],
    }
};

//variables con información
var curso1 = curso("Entorno cliente", "2024");
var curso2 = curso("Base de datos", "2023");



//función que establece la información del curso
function mostrarCurso(curso){ 
    let propiedadesCurso = "";
    console.log(`Vamos a mostrar la información del curso`);
    for(var propiedad in curso){
        propiedadesCurso += `${propiedad}: ${curso[propiedad]}\n`;
    }
    console.log(propiedadesCurso);
};

//Pruebas de resultado
console.log(mostrarCurso(curso1));
console.log(mostrarCurso(curso2));