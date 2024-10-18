import {useRef} from 'react';
import './Contadorico.css';
import { incrementar, decrementar } from '../biblioteca/biblioteca';

const Contadorico = () => {
    //Javascript
    const refeContador = useRef(null);
  return (
    //JSX
    <>
    <div>
        <button onClick={()=>{
            incrementar(refeContador);
        }}>Incrementar</button>
        <button onClick={()=>{
            decrementar(refeContador);
        }}>Decrementar</button>
        <p ref={refeContador}>0</p>
    </div>
    
    </>
  )
}

export default Contadorico;