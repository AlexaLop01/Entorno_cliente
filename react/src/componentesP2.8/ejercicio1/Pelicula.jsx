import Interpretes from "./Interpretes.jsx";
import "./Pelicula.css";
import movie from "../../objetosP2.8/pelicula.json";

const Pelicula = (props) =>{
    //Javascript
    const {children} = props;

    return(
        //JSX
        <>
        <div >
            <h1 className="pelicula-titulo" >{movie.pelicula.nombre}</h1>
            <p className="pelicula-direccion">{movie.pelicula.director}</p>
            <div className="pelicula-informacion">
                <img className="pelicula-imagen" src={movie.pelicula.cartelera} alt='Pelicula'/>
                <p className="pelicula-resumen">{children}</p>
            </div>
            <h1 className="pelicula-elenco">Elenco</h1>
            <Interpretes actores={movie.pelicula.actores}/>
        </div>
        </>
    );

}

export default Pelicula;