"use strict";

//Creamos una función para mostrar el listado de las películas.
const mostrarListadoPeliculas = (datos, contenedor)=>{
    //Creamos el elemento ul.
    const lista = document.createElement("ul");

    datos.map((pelicula)=> {
        lista.innerHTML += `<li> 
        ${pelicula.episode_id} ${pelicula.title} </li>`;
    })

    contenedor.appendChild(lista);
}

//Crear una función para mostrar la información de la película seleccionada.


export {mostrarListadoPeliculas};