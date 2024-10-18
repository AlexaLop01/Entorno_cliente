import { useRef } from "react";
import { obtenerNumeroAleatorio } from "../biblioteca/biblioteca.js";

const Numericos = () => {
    //Javascript
    const refeNumerico = useRef(null);

    const anadirNumerico = (referencia) =>{
        referencia.current.innerHTML += `<li>Número : ${obtenerNumeroAleatorio()}.</li>`
    };

  return (
    //JSX
    <>
        <div>
            <button onClick={()=>{
                anadirNumerico(refeNumerico);
            }}>Añadir numerico</button>
            <ol ref={refeNumerico}></ol>
        </div>
    </>
  )
}

export default Numericos;