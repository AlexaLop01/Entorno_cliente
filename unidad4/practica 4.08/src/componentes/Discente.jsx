import React from 'react';
import Aficiones from './Aficiones.jsx';

const Dicente = (props) => {
    //Javascript
    const {id , nombre, apellidos, curso, aficiones, comida} = props;
    return(
        //JSX
        <>
        <div>
            <h2>Datos del discente: </h2>
            <p className='id-dicente'>Id: {id}</p>
            <p>Nombre: {nombre}</p>
            <p>Apellidos: {apellidos}</p>
            <p>Curso: {curso}</p>
            <Aficiones aficiones={aficiones}/>
            <p>Comida: {comida}</p>
        </div>

        </>
    )
}

export default Dicente;