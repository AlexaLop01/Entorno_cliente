import Pelicula from "./Pelicula.jsx";
import Interpretes from "./Interpretes.jsx";
import movies from "../../objetosP2.8/peliculas.json";

function Peliculas() {
    //Javascript
    
    return(
        //JSX
        <>
        <div>
            {movies.peliculas.length ?
            movies.peliculas.map((movie) => {
                return (
                    <Pelicula
                        key={movie.id}
                        titulo={movie.nombre}
                        direccion={movie.director}
                        cartelera={movie.cartelera} 
                        actores={<Interpretes actores={movie.actores}/>}   
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