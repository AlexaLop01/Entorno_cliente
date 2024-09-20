"use strict"

//creamos un "constructor" de tipo curso
function curso(curso, any) {
    return{
        nombreCurso:curso,
        any: any, 
        descripcion: "",
        alumnado:[],
    }
}
console.log(curso());