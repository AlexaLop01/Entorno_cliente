import './App.css';
import Contenedor from './componentesP2.8/ejercicio1/Contenedor.jsx';
import Pelicula from './componentesP2.8/ejercicio1/Pelicula.jsx';
import Peliculas from './componentesP2.8/ejercicio2/Peliculas.jsx';
import movie from "./objetosP2.8/pelicula.json";

function App() {
 
  return (
    <>
      <h1>Ejercicio 1</h1>
      <Contenedor>
        <Pelicula
        >{movie.pelicula.resumen}</Pelicula>
      </Contenedor>
      <h1>Ejercicio 2</h1>
      <Contenedor>
      <Peliculas></Peliculas>
      </Contenedor>
    </>
  )
};

export default App;
