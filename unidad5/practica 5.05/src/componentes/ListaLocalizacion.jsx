import React, { useEffect, useState } from 'react';
import { obtenerDatos } from '../../../practica 5.04/src/biblioteca/biblioteca.js';
import Localizaciones from './mostrarListas/Localizacion/Localizaciones.jsx';
import InformacionLocalizaciones from './mostrarInformacion/Localizacion/InformacionLocalizaciones.jsx';

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

    const filtrarLocalizaciones = (identificador)=>{
      const filtrado = listadoLugares.filter((lugar)=>{
        //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
        return lugar.id === parseInt(identificador); 
      })
      setLugarFiltrado(filtrado);
    }
    console.log(lugarFiltrado);

    useEffect(()=>{
      traerListadoLocalizaciones();
    },[]);
  return (
    //JSX
    <>
      <div onClick={(evento)=>{
        filtrarLocalizaciones(evento.target.id);
      }}>
        <h2>Listado de Localizaciones</h2>
        {errores? errores: <Localizaciones mostrarLocalizaciones={listadoLugares}/>}
      </div>

      <div>
        <InformacionLocalizaciones mostrarInformacionLocalizaciones={lugarFiltrado}/>
      </div>
    
    </>
  )
}

export default ListaPersonajes;