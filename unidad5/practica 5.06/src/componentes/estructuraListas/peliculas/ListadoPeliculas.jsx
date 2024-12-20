import React, { useState , useEffect} from 'react';
import { obtenerDatos } from '../../../biblioteca/biblioteca.js';
import Peliculas from '../../mostrarListas/peliculas/Peliculas.jsx';
import PeliculasInformacion from '../../mostrarInformacion/peliculas/PeliculasInformacion.jsx';
import "./ListadoPeliculas.css";

const ListadoPeliculas = () => {
    //Javascript
    //Creamos el valor de los estados iniciales.
    const listadoInicial = [];
    const erroresIniciales = "";
    const peliculaFiltradaInicial = [];
    const urlPeliculas = `https://swapi.py4e.com/api/films/`;
    //Creamos los estados.
    const [listado, setListado] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);
    const [peliculaFiltrada, setPeliculaFiltrada] = useState(peliculaFiltradaInicial)

    //Hacemos una función la cuál haga una llamada a la API de películas y guardamos su información en el estado de listado.
    
    /*Con el async await lo que hacemos es crear una línea paralela al hilo principal, donde se realizará esta consulta
    y cuando la función de obtener datos haya finalizado, el await espera a la respuesta de la función, consume la promesa que le manda
    y lo guarda en datos , para que después se guarde en el estado.*/
    const traerListadoPeliculas = async () =>{
      try{
        const datos = await obtenerDatos(urlPeliculas);
        setListado(datos.results);

      }catch (error){
        setErrores(`Se ha producido un error: ${error}`);
      }
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
        if(evento.target.tagName === "H3"){//Con esta línea controlamos que solo ocurra cuando seleccione el elemento en especifico.
          filtrarPelicula(evento.target.id);
        }
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