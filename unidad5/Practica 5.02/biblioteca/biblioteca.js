"use strict";

//Creamos una función para mostrar el listado de las películas.
const mostrarListadoPeliculas = (datos, contenedor)=>{
    //Creamos el elemento ul.
    const lista = document.createElement("ul");

    datos.map((peliculas)=> {
        lista.innerHTML += `<li id="${peliculas.episode_id}"> 
        ${peliculas.episode_id} : ${peliculas.title} </li>`;
    })

    contenedor.appendChild(lista);
};

//Crear una función para mostrar la información de la película seleccionada.
//Haremos una función para formatear la fecha que nos pasa la api.
const formatearFechaEuropeo = (fecha)=>{
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
}
//Primero creamos una función que haga un map de una pelicula en concreto que usaremos después en la función que la filtra.
const mapearInformacionPelicula = (peliculaFiltrada, contenedor)=>{
    peliculaFiltrada.map((pelicula)=>{
        contenedor.innerHTML = `<h3>${pelicula.title}</h3>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor:</strong> ${pelicula.producer}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${formatearFechaEuropeo(pelicula.release_date)}</p>
        <p><strong>Sinopsis:</strong>  ${pelicula.opening_crawl}</p>`;

    })
}
//Segundo creamos una función que te permita filtrar los datos y los pinte por pantalla.
const mostrarInformacionPelicula = (datos,identificador, contenedor) =>{
    const peliculaFiltrada = datos.filter((pelicula)=>{
        return pelicula.episode_id === parseInt(identificador);
    })
    mapearInformacionPelicula(peliculaFiltrada, contenedor);
};

export {mostrarListadoPeliculas, mostrarInformacionPelicula};