import { Outlet, useNavigate } from "react-router-dom";
import SubmenuPeliculas from "../Estructura/SubmenuPeliculas.jsx";
import { generarUuidAleatorio } from "../bibliotecas/bibliotecas.js";
import Pelicula from "./Pelicula.jsx";
import "../css/Peliculas.css";


function Peliculas(props) {
    //Javascript
    const {listado} = props;
    const navegar = useNavigate();
    return(
        //JSX
        <>
        <h1>Panel de administración de Películas</h1>
        <div>
            <SubmenuPeliculas/>
        </div>
        <div>
            <Outlet/>
        </div>
        <button onClick={()=>{
            navegar("/");
        }}>Volver a Inicio</button>
        <div>
            {listado.length ?
            listado.map((movie) => {
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