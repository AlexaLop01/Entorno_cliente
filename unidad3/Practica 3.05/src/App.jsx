
import './App.css'
import movies from "./objetos/peliculas.json";

function App() {

  return (
    <>
      <div>
      <Contenedor>
        <Pelicula peliculas ={movies.peliculas}/>
      </Contenedor>  
      </div>
    </>
  )
}

export default App
