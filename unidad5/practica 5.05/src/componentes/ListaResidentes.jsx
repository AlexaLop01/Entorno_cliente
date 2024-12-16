import React, { useState,useEffect } from 'react';
import { obtenerDatos } from '../../../practica 5.04/src/biblioteca/biblioteca.js';
import Residentes from './mostrarListas/Residentes/Residentes.jsx';
import InformacionResidentes from './mostrarInformacion/Residentes/InformacionResidentes.jsx';
import "./ListaResidentes.css";

const ListaResidentes = ({residentes}) => {
    const residentesIniciales = [];
    const residenteFiltradoInicial = [];
    const [listaResidentes, setListaResdentes] = useState(residentesIniciales);
    const  [residenteFiltrado, setResidenteFiltrado] = useState(residenteFiltradoInicial);

    //Creamos una función que se encargue de traer las promesas y las consuma.
    const traerListaResidentes = async (personas) =>{
        let promesas = [];
        //Cuando colocamos personas.slice lo que obtenemos son los elementos comprendidos entre los numeros indicados dentro del slice.
        //En este caso siendo 0 donde empieza y 10 donde termina.
        let cantidadPersonas = personas.slice(0, 10);
        
        //Realizamos un map para guardar las promesas en el array.
        cantidadPersonas.map((persona)=>{
            promesas = [...promesas, obtenerDatos(persona)];
        });

        //Consumimos las promesas que nos pase el array mapeado anteriormente.
        let promesasConsumidas = await Promise.allSettled(promesas);

        //Validamos que las promesas esten fullfiled.
        //Esta comprobación es solo para que imprima solo las promesas que tienen estado fullfiled.
        let promesasValidacion = [];
        promesasConsumidas.map((respuestas)=>{
            if(respuestas.status === "fulfilled"){
                return promesasValidacion = [...promesasValidacion, respuestas.value];
            }
        })

        //Añadimos esas promesas consumidas al estado.
        setListaResdentes(promesasValidacion);

    }

    //Realizamos una función que filtre el actor seleccionado en la lista para mostrar su información.
    const filtrarResidente = (nombre)=>{
        const filtrado = listaResidentes.filter((actor)=>{
            //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
            return actor.name === nombre; 
        })
        //Guardamos el actor filtrado en el estado.
        setResidenteFiltrado(filtrado);
    }

    useEffect(()=>{
        traerListaResidentes(residentes);
    },[]);
  return (
    //JSX
    <>
    <div className='contenedor-lista-residentes' onClick={(evento)=>{
            if(evento.target.tagName === "H4"){//Con esta línea controlamos que solo ocurra cuando seleccione el elemento en especifico.
                filtrarResidente(evento.target.dataset.id);
            }
        }}>
            <Residentes residentesAMostrar={listaResidentes}/>
        </div>
        <div>
            <InformacionResidentes residentesInformacionAMostrar={residenteFiltrado}/>
        </div>
    </>
  )
}

export default ListaResidentes;