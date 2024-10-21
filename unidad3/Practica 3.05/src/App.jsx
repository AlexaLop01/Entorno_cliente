import Peliculas from './componentes/Peliculas.jsx';
import Contenedor from './componentes/Contenedor.jsx';
import './App.css'
import movies from "./objetos/peliculas.json";

function App() {

  return (
    <>
      <div>
      <Contenedor>
        <Peliculas peliculas ={movies.peliculas}/>
      </Contenedor>  
      </div>
    </>
  )
}

export default App
