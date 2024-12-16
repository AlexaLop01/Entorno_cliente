import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../../../practica 5.04/src/biblioteca/biblioteca.js';

const ListaPersonajes = () => {
  //Javascript
  /**
   Todos los personajes: https://rickandmortyapi.com/api/character/
  Episodios: https://rickandmortyapi.com/api/episode/
  Localizaciones: https://rickandmortyapi.com/api/location/
   */

    const listadoInicial = [];
    const lugarFiltradoInicial = [];
    const erroresIniciales = "";
    const urlLugares = "https://rickandmortyapi.com/api/location/";
    
    const [listadoLugares, setListadoLugares] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);
    const [lugarFiltrado, setLugarFiltrado] = useState(lugarFiltradoInicial);

    const traerListadoLocalizaciones = async () =>{
      try{
        const datos = await obtenerDatos(urlLugares);
        const cantidadLista = datos.results.slice(0,10);
        setListadoLugares(cantidadLista);

      }catch (error){
        setErrores(`Se ha producido un error: ${error}`);
      }
    }

    useEffect(()=>{
      traerListadoLocalizaciones();
    },[]);
  return (
    //JSX
    <div>ListaPersonajes</div>
  )
}

export default ListaPersonajes;