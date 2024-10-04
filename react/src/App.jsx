import './App.css';
import Contenedor from './componentesP2.8/Contenedor.jsx';
import Pelicula from './componentesP2.8/Pelicula.jsx';
import movie from "../objetosP2.8/pelicula.json";

function App() {
 
  return (
    <>
      <Contenedor>
        <Pelicula>{movie.pelicula.resumen}</Pelicula>
      </Contenedor>
    </>
  )
};

export default App;
