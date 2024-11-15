import React from 'react';
import Discente from './Discente.jsx';

const Discentes = (props) => {
  //Javascript
  const {discentes} = props;
  return (
    //JSX
    <>
    <div>
        {discentes.lenght ? 
            discentes.map((discente) =>{
                return(
                    <Discente 
                        key={discente.id}
                        id={discente.id}
                        nombre={discente.nombre}
                        apellidos={discente.apellidos}
                        curso={discente.curso}
                        aficiones={discente.aficiones}
                        comida={discente.comida}
                    
                    />
                );
            })
        : "No se ha encontrado ningún discente."}
    </div>
    </>
  )
}

export default Discentes;