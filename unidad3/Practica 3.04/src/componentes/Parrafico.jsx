import {useRef} from 'react';
import { cambiarColorElemento } from '../biblioteca/biblioteca.js';

const Parrafico = () => {
    //Javascript
    const referenciaParrafico = useRef(null);

  return (
    <>
        <div>
        <button onClick={()=>{
              cambiarColorElemento(referenciaParrafico);
          }}>Cambiar colorico</button>
          <p ref={referenciaParrafico}>¡Soy el párrafo 1! Hola.</p>
        </div>
    </>
  )
}

export default Parrafico;