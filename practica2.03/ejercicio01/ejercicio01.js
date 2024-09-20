"use strict"

//creamos un "constructor" de tipo curso
function curso(curso, any) {
    return{
        nombreCurso:curso,
        any: any, 
        descripcion: "ninguna",
        alumnado:[],
    }
}
console.log(curso());