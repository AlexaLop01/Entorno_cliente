import {useState} from 'react';
import { generarNumerosAleatorios } from '../biblioteca/biblioteca.js';
import "./Listado.css";

const Listado = () => {
    //Javascript
    const numerosArrayVacio = [];
    const [numeros, setNumeros] = useState(numerosArrayVacio);

    //Creamos la función que elimine todos los elementos del estado.
    const borrarElementosEstado = () =>{
        setNumeros([]);
    }
    
  return (
    //JSX
    <>
        <div>
                <button onClick={()=>{
                    generarNumerosAleatorios(numeros, setNumeros);
                }}>Generar</button>
                <button onClick={()=>{
                    borrarElementosEstado();
                }}>Borrar</button>
            <p>Numeros generados Aleatoriamente: </p>
            <ul>
                {numeros.map((numero, indice)=>{
                //Generamos un map que recorra el estado de numeros y los devuelva en una lista.
                    return(
                        <li key={indice}>{numero}</li>
                    );
                })
                }
            </ul>
        </div>
    </>

  )
}

export default Listado;
