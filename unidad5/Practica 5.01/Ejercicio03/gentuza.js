"use strict";

window.onload = ()=>{
    //Creamos una variable con la url de la lista de personas de la api de stars wars.
    const urlPeople = "https://swapi.dev/api/people";

    //Realizamos el acceso a la url con el fetch.
    fetch(urlPeople)
    .then((respuesta)=>{
        //Convierte en un json lo que le pasamos por fetch.
        return respuesta.json();
    })
    .then((datos)=>{
        //Coge lo que respuesta le pasa y hacemos un mapeado para poder sacarlo por pantalla.
        const contenedor = document.getElementById("lista-people");
        datos.results.map((people, indice)=>{
            contenedor.innerHTML += `<h4>Persona: ${indice + 1}</h4>
            <p>Nombre: ${people.name}</p>
            <p>Peso: ${people.mass} kg</p>
            <p>Genero: ${people.gender}</p>
            <p>Color de pelo: ${people.hair_color}</p>
            <p>Año de nacimiento: ${people.birth_year}</p>`;
            
        })
    })
    .catch((error)=>{
        //Hacemos el control de errores.
        console.error(error);;
    })
}