import Pelicula from "./Pelicula.jsx";
import movies from "../objetosP2.8/pelicula.json";

function Peliculas() {
    //Javascript

    return(
        //JSX
        <>
        <div>
            {movies.pelicula.length ?
            movies.pelicula.map((movie) => {
                return (
                    <Pelicula
                        key={movie.id}
                        titulo={movie.nombre}
                        direccion={movie.direccion}
                        cartelera={movie.cartelera}
                        actores={movie.actores}
                    >
                      {movie.resumen}  
                    </Pelicula>
                );
            })
            : "No se ha encontrado ningún actor."}
        </div>
        </>
    );
}

export default Peliculas;