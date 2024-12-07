import React, { useState , useEffect} from 'react';
import Peliculas from './mostrarListado/Peliculas.jsx';
import PeliculasInformacion from './mostrarInformacion/PeliculasInformacion.jsx';
import "./ListadoPeliculas.css";

const ListadoPeliculas = () => {
    //Javascript
    //Creamos el valor de los estados iniciales.
    const listadoInicial = [];
    const erroresIniciales = "";
    const peliculaFiltradaInicial = [];
    //Creamos los estados.
    const [listado, setListado] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);
    const [peliculaFiltrada, setPeliculaFiltrada] = useState(peliculaFiltradaInicial)

    //Hacemos una función la cuál haga una llamada a la API de películas y guardamos su información en el estado de listado.
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

    //Creamos una función para filtrar y que salga la información de la película seleccionada.
    const filtrarPelicula = (identificador)=>{
      const filtrada = listado.filter((pelicula)=>{
        //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
        return pelicula.episode_id === parseInt(identificador); 
      })
      setPeliculaFiltrada(filtrada);
    }

    //Cargamos la llamada a la API solo una vez con el useEffect.
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
      {/*Se muestra el listado de películas. */}
        <h2>ListadoPeliculas</h2>
        {errores ? errores : <Peliculas mostrarLista={listado}/>}
      </div>
      {/*Se muestra la información de la película filtrada. */}
      <div id='contenido-informacion'>
        <h2>Película</h2>
        <PeliculasInformacion mostrarInformacion={peliculaFiltrada}/>
      </div>
    </div>
    </>
  )
}

export default ListadoPeliculas;