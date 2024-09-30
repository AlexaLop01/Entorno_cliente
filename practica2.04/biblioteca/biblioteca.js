"use strict";

//En este fichero crearemos las funciones que necesitemos en los ejercicios. 
//Acordarnos de que hay que exportarlas para poder utilizarlas en los otros ficheros js.
//Para exportar : export { nombreFuncion };.

//Función cambiar a mayúsculas.
function cambiarMayusculas(array) {
    let arrayMayusculas = [...array].map((nombre) => { 
        return nombre.toUpperCase(); 
    });
    return `El array en mayúsculas es : ${arrayMayusculas}`;
}

//Función para ordenar alfabéticamente al revés.
function ordenarAlfabetoReves(array) {
    let nombreAlfabeto = [...array].sort(); //Ordenamos primero el array alfabéticamente.
    nombreAlfabeto = nombreAlfabeto.reverse(); //Colocamos el array de forma inversa.
    return `El array ordenado alfabéticamente invertido es: ${nombreAlfabeto}`;
}

//Función para mostrar los elementos de un objeto. Reutilizo la función de la práctica anterior.
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
          console.log(`${clave} : ${valor}.`);
        } else if (tipoDato === "string") {
          console.log(`${clave} : ${valor}.`);
        } else if (Array.isArray(valor)) {
          console.log(`${clave} : [${valor}]`);
        } else if (tipoDato === "object") {
          console.log(`${clave}:  { `);
          //Esto es una llamada recursiva a la función de sacar el objeto como parámetro para reutilizar el código que se ha hecho.
          mostrarObjeto(valor);
          console.log(`}`);
          
        } else if (tipoDato === "function") {
          console.log(
            `${clave} : ${valor.name || "función anónima"}`
          );
        } else {
          console.log(`${clave} : ${valor}`);
        }
      }
    }
  }


//Función para convertir los elementos de un array a un array de objetos.
function convertirAObjetos(array) {
    //Hacemos un nuevo array de nombres para convertirlo a objetos, con map, añadiendole el indice como id de cada objeto.
    let arrayNombresObjetos = [...array].map((nombre, indice) =>{
        return {
            id: indice,
            nombre: nombre
        };
    });

    console.log(`El array de objetos es el siguiente: `);
    return mostrarObjeto(arrayNombresObjetos); //Utilizo la función de mostrar para que aparezca la información del objeto.
}

//Función para generar numeros aleatorios reutilizada y modificada.

function generarNumerosAleatorios(cantidad) {
    let numerosAleatorios = [];

    for (let i = 0; i < cantidad; i++) {
        numerosAleatorios[i] = Math.floor(Math.random()*11);   
    }

    return numerosAleatorios;
}

function filtrarArray(array) {
    let arrayFiltrado = [...array].filter((numero) => {
        return numero > 5; //Se filtran los numeros mayores que 5.
    });
    console.log(`El array filtrado por número es: ${arrayFiltrado}.`);
      
}

function insertarNuevoUsuario(array ,nuevoUsuario) {
    let usuarioNuevoInsertado = [...array, nuevoUsuario];
    console.log(`Estos son los usuarios del array con su nuevo usuario:`);
    mostrarObjeto(usuarioNuevoInsertado); //Reutilizo la función para imprimir objetos.
}

function filtrarUsuariosEdad(array) {
    let arrayFiltradoEdad = [...array].filter((usuario) => {
        return usuario.preferencias.edad >= 18; //Con usuario.edad lo que hacemos es especificar que dato es el que usaremos para filtrar.
    });
    console.log(`El array filtrado por edad es: `);
    mostrarObjeto(arrayFiltradoEdad);
}

function filtrarUsuariosYahoo(array) {
    let arrayFiltradoEmail = [...array].filter((usuario) => {
        return usuario.contacto.correoelectronico.includes("@yahoo.com"); //Cuando colocamos el .include es para verificar si el dato contiene esa información dentro de su valor.
    });
    console.log(`El array filtrado por email es: `);
    mostrarObjeto(arrayFiltradoEmail);
}

function filtrarUsuario3datos(array){
    console.log(`El array filtrado por tema, edad y pais es: `);
    let arrayFiltrado3datos = [...array,].filter((usuario) => {
        //Especificamos con su ruta correspondiente cuales son los requisito del filtro para este array con tema, edad y pais.
        if(usuario.preferencias.tema === "claro" && usuario.preferencias.edad >=18 && usuario.contacto.direccion.pais === "España"){
            return usuario; 
        }else{
            console.log(`No hay usuarios con ese filtro.`); //Este if else lo coloco ya que al probar veo que no existe el objeto con esas especificaciones. 
        }

    });
    mostrarObjeto(arrayFiltrado3datos);
}

function valorVacio(array) {
    let arrayValorVacio = [...array].filter((usuario) => {
        return  !usuario.nombre || !usuario.preferencias || !usuario.contacto || !usuario.contacto.direccion || !usuario.contacto.correoelectronico ||!usuario.contacto.telefono ;
    });
    console.log(`El array filtrado por valor vacio es: `);
    mostrarObjeto(arrayValorVacio);

}

function anyadirApellidos(array) {
    let usuarioModificado = [...array].map((usuario) =>{
      return { //Dentro del map se devuelve la copia del objeto , más el nuevo atributo.
        ...usuario,
        apellidos: "No indicado"
      };
  });
    mostrarObjeto(usuarioModificado);
}

function anyadirCodigoDireccion(array) {
   let usuarioModificadoCodigo = [...array].map((usuario) =>{
      return { //Dentro del map se devuelve la copia del objeto , y vamos llamando a los demás objetos hasta poder entrar en el que deseamos añadir el nuevo atributo.
        ...usuario,
        contacto:{
          ...usuario.contacto,
            direccion:{
              codigo : "00000",
            ...usuario.contacto.direccion
            }
          
        }
      };
  });
    mostrarObjeto(usuarioModificadoCodigo);
}

//Funciones para el primer ejercicio.
export {cambiarMayusculas, ordenarAlfabetoReves, convertirAObjetos};

//Funciones para el segundo ejercicio.
export {generarNumerosAleatorios, filtrarArray};

//Función para el tercer ejercicio.
export {insertarNuevoUsuario, filtrarUsuariosEdad, filtrarUsuariosYahoo, filtrarUsuario3datos, valorVacio, anyadirApellidos, anyadirCodigoDireccion};