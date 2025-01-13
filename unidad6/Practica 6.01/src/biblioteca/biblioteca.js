"use strict";
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

const formatearFechaEuropeo = (fecha)=>{
    const [year, month, day] = fecha.split("-");
    return `${day}/${month}/${year}`;
}

const obtenerDatos = (url) =>{
    return fetch(url)
    .then((respuesta)=>{
        return respuesta.json();
        })
    .then((datos)=>{
        return datos;
        })
    .catch((error)=>{
        `Se ha producido este error: ${error.message}`;
    })

}



export{ generarUuidAleatorio, formatearFechaEuropeo, obtenerDatos};