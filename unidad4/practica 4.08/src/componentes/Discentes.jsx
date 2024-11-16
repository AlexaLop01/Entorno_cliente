import React from 'react';
import Discente from './Discente.jsx';
import { generarUuidAleatorio } from '../biblioteca/biblioteca.js';

const Discentes = (props) => {
  //Javascript
  const {discentes } = props;
  return (
    //JSX
    <>
    <div >
        {discentes.map((discente) =>{
                return(
                    <Discente 
                        key={generarUuidAleatorio()}
                        id={discente.id}
                        nombre={discente.nombre}
                        apellidos={discente.apellidos}
                        curso={discente.curso}
                        aficiones={discente.aficiones}
                        comida={discente.comida}
                    
                    />
                );
            })
        }
    </div>
    </>
  )
}

export default Discentes;