"use strict";

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
};


//Creamos pruebas de discentes
let discente1 = discente("01", "Manuel", "Martinez Gomez", 5, 6, 8);
let discente2 = discente("02", "María", "Gonzalez López", 8, 7, 8);

//Imprimimos los informes de los discentes creados anteriormente
discente1.imprimirInforme();
discente2.imprimirInforme();


