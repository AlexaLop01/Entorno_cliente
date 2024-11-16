import React from 'react';
import Aficiones from './Aficiones.jsx';
import "./Discente.css";


const Dicente = (props) => {
    //Javascript
    const {id , nombre, apellidos, curso, aficiones, comida, onClick} = props;
    return(
        //JSX
        <>
        <div className='contenedor-discente' onClick={()=>{
            onClick(id);//Colocamos esa función generada en matricula para que nos elimine el discente indicado por identificador.
        }}>
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
        </div>

        </>
    )
}

export default Dicente;