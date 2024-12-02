"use strict";

import { mostrarListadoPeliculas } from "./biblioteca/biblioteca.js";

window.onload = ()=>{
    //Seleccionamos el contenedor donde se guardará la lista de películas.
    //Guardamos la url de la api.
    const urlFilms = "https://swapi.dev/api/films";
    
    //Creamos la inserción de la lista de peliculas.
    fetch(urlFilms)
    .then((respuesta)=>{
        //Convierte en un json lo que le pasamos por fetch.
        return respuesta.json();
    })
    .then((datos)=>{
        //Coge lo que respuesta le pasa y hacemos un mapeado para poder sacarlo por pantalla.
        const contendorPeliculas = document.getElementById("contenedor-peliculas");
        mostrarListadoPeliculas(datos.results, contendorPeliculas);
    
    })
    .catch((error)=>{
        //Hacemos el control de errores. 
        console.error(error);;
    })
}