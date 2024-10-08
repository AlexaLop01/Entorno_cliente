import "./Pelicula.css";

const Pelicula = (props) =>{
    //Javascript
    const {children, titulo, direccion, cartelera, actores} = props;

    return(
        //JSX
        <>
        <div>
            <h1 className="pelicula-titulo" >{titulo}</h1>
            <p className="pelicula-direccion">{direccion}</p>
            <div className="pelicula-informacion">
                <img className="pelicula-imagen" src={cartelera} alt='Pelicula'/>
                <p className="pelicula-resumen">{children}</p>
            </div>
            <h1 className="pelicula-elenco">Elenco</h1>
            <div>{actores}</div>
        </div>
        </>
    );

}

export default Pelicula;