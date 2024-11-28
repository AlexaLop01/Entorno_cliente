"use strict";

window.onload = ()=>{
    //Guardamos el array de objetos en una variable.
    const ficheroFeos = "./objetos/feos.json";

    //Construimos la estructura fetch con sus then y catch.
    fetch(ficheroFeos)
    .then((respuesta)=>{
        //Devolvemos un json del dato seleccionado por fetch.
        return respuesta.json();
    })
    .then((datos)=>{
        //Cogemos el json que nos pasa el then anterior para mapearlo y sacarlo formateado en el index.
        const contendor = document.getElementById("listado-feos");
        datos.map((feo)=>{
            contendor.innerHTML += `<h4>Persona: ${feo.id}</h4>
            <p>Nombre: ${feo.first_name}</p>
            <p>Apellido: ${feo.last_name}</p>
            <p>Email: ${feo.email}</p>
            <p>Genero: ${feo.gender}</p>
            <p>Dirección ip: ${feo.ip_address}</p>`;
            
        })
    })
    .catch((error)=>{
        console.log(`Ha habido algún error: ${error.message}`);
    })
};