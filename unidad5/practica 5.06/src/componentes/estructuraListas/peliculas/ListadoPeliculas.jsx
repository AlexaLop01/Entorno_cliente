import React, { useContext} from 'react';
import { contextoPeliculas } from '../../contexto/ProveedorPeliculas.jsx';
import Peliculas from '../../mostrarListas/peliculas/Peliculas.jsx';
import PeliculasInformacion from '../../mostrarInformacion/peliculas/PeliculasInformacion.jsx';
import "./ListadoPeliculas.css";


const ListadoPeliculas = () => {
    //Javascript
  const { listado, errores, peliculaFiltrada ,filtrarPelicula } = useContext(contextoPeliculas);
    
  return (
    //JSX
    <>
    <div id='contenedor-listado-peliculas'>
      <div id='contenido-listado' onClick={filtrarPelicula}>
      {/*Se muestra el listado de películas. */}
        <h2>ListadoPeliculas</h2>
        {errores ? errores : <Peliculas/>}
      </div>
      {/*Se muestra la información de la película filtrada. */}
      <div id='contenido-informacion'>
        <h2>Película</h2>
        <PeliculasInformacion/>
      </div>
    </div>
    </>
  )
}

export default ListadoPeliculas;