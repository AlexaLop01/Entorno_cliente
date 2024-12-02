"use strict";

import { mostrarInformacionPelicula, mostrarListadoPeliculas } from "./biblioteca/biblioteca.js";

window.onload = ()=>{
    //Seleccionamos el contenedor donde se guardará la lista de películas.
    //Guardamos la url de la api.
    const urlFilms = "https://swapi.dev/api/films/";
    
    //Creamos la inserción de la lista de películas.
    fetch(urlFilms)
    .then((respuesta)=>{
        //Convierte en un json lo que le pasamos por fetch.
        return respuesta.json();
    })
    .then((datos)=>{
        //Coge lo que respuesta le pasa y hacemos un mapeado para poder sacarlo por pantalla.
        const contendorPeliculas = document.getElementById("contenedor-peliculas");
        mostrarListadoPeliculas(datos.results, contendorPeliculas);

        //Seleccionamos el contenedor donde se mostrará la información de la película.
        const contenedorInformacion = document.getElementById("contenedor-información");

        contendorPeliculas.addEventListener("click", (evento)=>{
            if(evento.target.tagName === "LI"){
                //Seleccionamos la película en concreto y la mostramos.
                mostrarInformacionPelicula(datos.results, evento.target.id, contenedorInformacion);
            }
        }, false);
    
    })
    .catch((error)=>{
        //Hacemos el control de errores. 
        console.log(`Ha ocurrido un error: ${error.message}`);
    })
}