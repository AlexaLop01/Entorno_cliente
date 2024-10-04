import Interpretes from "./Interpretes.jsx";


const Pelicula = (props) =>{
    //Javascript
    const {children} = props;

    return(
        //JSX
        <>
        <div>
            <h1 className="pelicula-titulo" >{movie.pelicula.titulo}</h1>
            <p className="pelicula-direccion">{movie.pelicula.direccion}</p>
            <img className="pelicula-imagen" src={movie.pelicula.cartelera} alt='Pelicula'/>
            <p className="pelicula-resumen">{children}</p>
            <h1 className="">Elenco</h1>
            <Interpretes actores={movie.pelicula.actores}/>
        </div>
        </>
    );

}

export default Pelicula;