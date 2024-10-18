import { generarUuidAleatorio } from "../bibliotecas/bibliotecas.js";
import Pelicula from "./Pelicula.jsx";


function Peliculas(props) {
    //Javascript
    const {peliculas} = props;
    return(
        //JSX
        <>
        <div>
            {peliculas.length ?
            peliculas.map((movie) => {
                return (
                    <Pelicula
                        key={generarUuidAleatorio()}
                        titulo={movie.nombre}
                        direccion={movie.director}
                        cartelera={movie.cartelera}
                        recaudacion = {movie.recaudacion}
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