import "./Pelicula.css";
import Interpretes from "./Interpretes.jsx";
import { useRef } from "react";

const Pelicula = (props) =>{
    //Javascript
    const {children, titulo, direccion, cartelera, actores, recaudacion} = props;
    const refe = useRef(null);

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
            <p onClick={()=>{

            }} className="pelicula-elenco">Elenco</p>
            <p>Taquilla</p>

            <Interpretes actores={actores}></Interpretes>
        </div>
        </>
    );

}

export default Pelicula;