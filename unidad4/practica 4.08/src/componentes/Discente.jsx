import React from 'react';
import Aficiones from './Aficiones.jsx';
import "./Discente.css";


const Dicente = (props) => {
    //Javascript
    const {id , nombre, apellidos, curso, aficiones, comida} = props;
    return(
        //JSX
        <>
        <div className='contenedor-discente'>
            <h3>Datos del discente: {id}</h3>
            <div className='contendor-nombre'>
                <h4>Nombre: </h4>
                <p>{nombre}</p>
            </div>
            <div className='contenedor-apellidos'>
                <h4>Apellidos:</h4>
                <p>{apellidos}</p>
            </div>
            <div className='contenedor-curso'>
                <h4>Curso:</h4>
                <p>{curso}</p>  
            </div>
            <div className='contenedor-aficiones'>
                <h4>Las aficiones son:</h4>
                <Aficiones aficiones = {aficiones} />
            </div>
            <div className='contenedor-comida'>
                <h4>Comida:</h4>
                <p>{comida}</p>
            </div>
            <div>
                {/*Es necesario pasarle como id, el id del discente para que matricula
                pueda cogerlo y realizar la función de eliminar el discente con el target.id . */}
                <button id={id}>Borrar a {nombre}</button>
            </div>
        </div>

        </>
    )
}

export default Dicente;