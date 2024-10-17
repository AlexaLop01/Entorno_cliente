import { useRef } from "react";
import { obtenerNumeroAleatorio } from "../biblioteca/biblioteca.js";

const Numericos = () => {
    //Javascript
    const refe = useRef(null);

    const anadirNumerico = (referencia) =>{
        referencia.current.innerHTML += `<li>Número : ${obtenerNumeroAleatorio()}.</li>`
    };

  return (
    //JSX
    <>
        <div>
            <button onClick={()=>{
                anadirNumerico(refe);
            }}>Añadir numerico</button>
            <ol ref={refe}></ol>
        </div>
    </>
  )
}

export default Numericos;