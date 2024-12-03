import React, { useState } from 'react';

const ListadoPeliculas = () => {
    //Javascript
    const listadoInicial = [];
    const erroresIniciales = "";
    const [listado, setListado] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);

    const traerListadoPeliculas = ()=>{
        fetch(`https://swapi.dev/api/films/`)
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((datos)=>{
            setListado(datos.results);
        })
        .catch((error)=>{
            setErrores(error.message);
        })
    }
  return (
    //JSX
    <div>ListadoPeliculas</div>
  )
}

export default ListadoPeliculas;