import "../css/Pelicula.css";
import Interpretes from "./Interpretes.jsx";
import { quitarApariencia } from "../bibliotecas/bibliotecas.js";
import { useRef } from "react";

const Pelicula = (props) =>{
    //Javascript
    const {children, titulo, direccion, cartelera, actores, recaudacion} = props;
    const referenciaActores = useRef(null);
    const referenciaTaquilla = useRef(null);

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
            <div className="pelicula-referencias">
                <button  onClick={()=>{
                    quitarApariencia(referenciaActores);
                }} className="pelicula-elenco">Elenco</button>
                <button onClick={()=>{
                    quitarApariencia(referenciaTaquilla);
                }} className="pelicula-boton-taquilla">Taquilla</button>

            </div> 
                <p className= "pelicula-taquilla" ref={referenciaTaquilla}>{recaudacion}</p>
             
                <div ref={referenciaActores}>
                    <Interpretes  actores={actores}></Interpretes>
                </div>

            
        </div>
        </>
    );

}

export default Pelicula;