"use strict";

//función para imprimir por consola cualquier tipo de parámetro que se le pase a la función.

function mostrarObjeto(objeto) {
  if (typeof objeto !== "object" || objeto === null) {
    console.log(`El parámetro introducido no es un objeto.`);
  }

  let datosObjeto;

  for (var clave in objeto) {
    //Comprobamos que el objeto tenga la propiedad
    if (objeto.hasOwnProperty(clave)) {
      let valor = objeto[clave]; //guardamos el valor de la propiedad en una variable
      let tipoDato = typeof valor; // guardamos el tipo de dato del valor en una variable

      //Los if o if else son para verificar que tipo de dato son y si cumple la condición saca por consola lo que le corresponde.
      if (tipoDato === "number") {
        console.log(`${clave} (${tipoDato}): ${valor}.`);
      } else if (tipoDato === "string") {
        console.log(`${clave} (${tipoDato}): ${valor}.`);
      } else if (Array.isArray(valor)) {
        console.log(`${clave} (${tipoDato}): [${valor}]`);
      } else if (tipoDato === "object") {
        console.log(`${clave} (${tipoDato}):  { `);
        //Esto es una llamada recursiva a la función de sacar el objeto como parámetro para reutilizar el código que se ha hecho.
        mostrarObjeto(valor);
        console.log(` }`);
      } else if (tipoDato === "function") {
        console.log(
          `${clave} (${tipoDato}): ${valor.name || "función anónima"}`
        );
      } else {
        console.log(`${clave} (${tipoDato}): ${valor}`);
      }
    }
  }
}

//objetos de ejemplo de problemas anteriores.
function curso(curso, any) {
  return {
    nombreCurso: curso,
    any: any,
    descripcion: "ninguna",
    alumnado: ["hola", "adios"],
  };
}

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

//ejemplos de datos dentro de los objetos.
let discente1 = discente("01", "Manuel", "Martinez Gomez", 5, 6, 8);
var curso1 = curso("Entorno cliente", "2024");

//ejemplos de lo que sale por consola verificando que es lo que sale.
mostrarObjeto(curso1);
console.log("");// espacio para que no se junten los ejemplos.
mostrarObjeto(discente1);
