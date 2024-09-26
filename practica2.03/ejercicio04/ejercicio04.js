"use strict";

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
        },

        //función para calcular la media de las 3 evaluaciones
        calcularMedia : function() {
            let suma = this.notas.primera + this.notas.segunda + this.notas.tercera;
            return suma/3;
        },

        //función para imprimir las aficiones
        imprimirAficiones : function(){
            console.log(`Las aficiones de ${this.nombre} son: `);
            
            let resultadoAficiones = this.aficiones.map((aficion) => {
                console.log(`${aficion}`);
                return aficion;
                
            });
        },

        //función para imprimir el informe completo
        imprimirInforme: function() {
            console.log(`\n\tInforme del discente`);
            console.log(`----------------------------------`);
            console.log(`ID: ${this.id}`);
            console.log(`Nombre completo: ${this.nombre} ${this.apellidos}`);
            console.log(`Notas de evaluación: `);
            console.log(`\t·Primera: ${this.notas.primera}`);
            console.log(`\t·Segunda: ${this.notas.segunda}`);
            console.log(`\t·Tercera: ${this.notas.tercera}`);
            console.log(`\t·Nota media: ${this.calcularMedia().toFixed(2)}`);
            this.imprimirAficiones();
            
        }
        
    }
}

let discente1 = discente("01", "Manuel", "Martinez Gomez", 5, 6, 8);
let discente2 = discente("02", "María", "Gonzalez López", 8, 7, 8);

function curso(curso, any) {
    return{
        nombreCurso:curso,
        any: any, 
        descripcion: "ninguna",
        alumnado:[],

        //funcion para matricular
        matricular: function(){
            return  this.alumnado = [...this.alumnado, {...discente}];
        }   
    }
};

function mostrarCurso(curso){
    let propiedadesCurso = "";
    console.log(`Vamos a mostrar la información del curso`);
    for(var propiedad in curso){
        propiedadesCurso += `${propiedad}: ${curso[propiedad]}\n`;
    }
    console.log(propiedadesCurso);
};


var curso1 = curso("Entorno cliente", "2024");
var curso2 = curso("Base de datos", "2023");


//console.log(mostrarCurso(curso2));

console.log(curso1.matricular(discente1));
console.log(mostrarCurso(curso1));

