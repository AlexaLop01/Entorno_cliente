"use strict";

import { insertarNuevoUsuario, filtrarUsuariosEdad, filtrarUsuariosYahoo, filtrarUsuario3datos, valorVacio, anyadirApellidos, anyadirCodigoDireccion} from "../biblioteca/biblioteca.js";

//Array de objetos que proporciona el ejercicio 3.
const usuarios = [
    {
      nombre: "Luis",
      preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
      contacto: {
        direccion: {
          calle: "Calle falsa, 666",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@yahoo.com",
        telefono: "123456789",
      },
    },
    {
      nombre: "Marta",
      preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
      contacto: {
        direccion: {
          calle: "Calle también falsa, 123",
          localidad: "Andorra la Vella",
          pais: "Andorra",
        },
        correoelectronico: "correoandorrano@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Alberto",
      preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
      contacto: {
        direccion: {
          calle: "Elm Street, 666",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correonulo@yahoo.com",
        telefono: "548632478",
      },
    },
    {
      nombre: "Jacinto",
      preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
      contacto: {
        direccion: {
          calle: "Elm Street, 667",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "",
      },
    },
    {
      nombre: "Rigoberta",
      preferencias: { tema: "claro", idioma: "francés", edad: 34 },
      contacto: {
        direccion: {
          calle: "Calle inexistente, 6",
          localidad: "Elda",
          pais: "Española",
        },
        correoelectronico: "correofalso@gmail.com",
        telefono: "232547859",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle de mentira, s/n",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "estecorreonoexiste@gmail.com",
        telefono: "452158697",
      },
    },
    {
      nombre: "Sandra",
      preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
      contacto: {
        direccion: {
          calle: "Calle existente, 34",
          localidad: "Petrer",
          pais: "España",
        },
        correoelectronico: "correoinexistente@yahoo.com",
        telefono: "",
      },
    },
  ];

  
//Creamos un nuevo usuario para insertarlo en el array de usuarios.
  let nuevoUsuario = {
    nombre: "María",
      preferencias: { tema: "oscuro", idioma: "español", edad: 23 },
      contacto: {
        direccion: {
          calle: "Calle nueva, 15",
          localidad: "Elda",
          pais: "España",
        },
        correoelectronico: "correomaria@yahoo.com",
        telefono: "",
      },
  }

//Sacamos por consola el resultado de la inserción del nuevo usuario.
 insertarNuevoUsuario(usuarios, nuevoUsuario);
  console.log(`\n\n`); //Para generar espacios entre los resultados y sea más fácil separar las respustas.
//Sacamos los usuarios filtrados por edad.
  filtrarUsuariosEdad(usuarios);
  console.log(`\n\n`);
//Sacamos los ususarios filtrados por email.
  filtrarUsuariosYahoo(usuarios);
  console.log(`\n\n`);
//Sacamos los ususarios filtrados por tema, edad y pais.
filtrarUsuario3datos(usuarios);
console.log(`\n\n`);
//Sacamos por consola los objetos que tengan algún elemento vacío.
valorVacio(usuarios);
console.log(`\n\n`);
//Sacamos por consola los objetos con el apellido incluido.
anyadirApellidos(usuarios);
console.log(`\n\n`);
//Sacamos por consola el objeto con el codigo añadido.
anyadirCodigoDireccion(usuarios);


