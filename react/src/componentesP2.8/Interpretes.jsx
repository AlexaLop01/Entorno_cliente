import Interprete from "./Interprete";
import Actores from "../objetosP2.8/pelicula.json";

function Interpretes() {
    //Javascript
    const pelicula = [...Actores.pelicula.actores];
    console.log(pelicula);
    return(
        //JSX
        <>
        <h1>Lista de interpretes.</h1>
        <div>
            {pelicula.length ?
            pelicula.map((actor) => {
                return (
                    <Interprete
                    
                    >
                        
                    </Interprete>
                );
            })
            : "No se ha encontrado ningún actor."}
        </div>
        </>
    );
}