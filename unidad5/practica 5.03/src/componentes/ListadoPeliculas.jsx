import React, { useState , useEffect} from 'react';
import Peliculas from './mostrarListado/Peliculas.jsx';
import "./ListadoPeliculas.css";
import PeliculasInformacion from './mostrarInformacion/PeliculasInformacion.jsx';

const ListadoPeliculas = () => {
    //Javascript
    const listadoInicial = [];
    const erroresIniciales = "";
    const peliculaFiltradaInicial = [];
    const [listado, setListado] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);
    const [peliculaFiltrada, setPeliculaFiltrada] = useState(peliculaFiltradaInicial)

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

    const filtrarPelicula = (identificador)=>{
      const filtrada = listado.filter((pelicula)=>{
        //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
        return pelicula.episode_id === parseInt(identificador); 
      })
      setPeliculaFiltrada(filtrada);
    }

    useEffect(() => {
      traerListadoPeliculas();
    }, [])
    
  return (
    //JSX
    <>
    <div id='contenedor-listado-peliculas'>
      <div id='contenido-listado' onClick={(evento)=>{
        filtrarPelicula(evento.target.id)
      }}>
        <h2>ListadoPeliculas</h2>
        {errores ? errores : <Peliculas mostrarLista={listado}/>}
      </div>
      <div id='contenido-informacion'>
        <h2>Película</h2>
        <PeliculasInformacion mostrarInformacion={peliculaFiltrada}/>
      </div>
    </div>
    </>
  )
}

export default ListadoPeliculas;