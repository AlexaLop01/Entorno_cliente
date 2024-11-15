import React from 'react';
import Aficiones from './Aficiones.jsx';


const Dicente = (props) => {
    //Javascript
    const {id , nombre, apellidos, curso, aficiones, comida} = props;
    return(
        //JSX
        <>
        <div className='contenedor-discente'>
            <h3>Datos del discente: {id}</h3>
            <p>Nombre y apellidos: </p>
            <p>{nombre} {apellidos}</p>
            <p>{curso}</p>
            <p>Las aficiones son:</p>
            <Aficiones aficiones = {aficiones} />
            <p>Comida: {comida}</p>
        </div>

        </>
    )
}

export default Dicente;