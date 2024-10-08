import Interprete from "./Interprete.jsx";

function Interpretes(props) {
    //Javascript
    const {actores} = props;
    return(
        //JSX
        <>
        <div>
            {actores.length ?
            actores.map((actor) => {
                return (
                    <Interprete
                        key={actor.nombre}
                        foto={actor.imagen}
                        nombre={actor.nombre}
                        fechaNacimiento={actor.fechaNacimiento}
                        biografia={actor.biografia}/>
                );
            })
            : "No se ha encontrado ningún actor."}
        </div>
        </>
    );
}

export default Interpretes;