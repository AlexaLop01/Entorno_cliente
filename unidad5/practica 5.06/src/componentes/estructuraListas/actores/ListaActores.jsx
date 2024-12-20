import React, { useEffect, useState } from 'react'
import { obtenerDatos } from "../../../biblioteca/biblioteca.js";
import Actores from '../../mostrarListas/actores/Actores.jsx';
import "./ListaActores.css";
import ActoresInformacion from '../../mostrarInformacion/actores/ActoresInformacion.jsx';

const ListaActores = ({actores}) => {
    //Javascript
    //Creamos el estado inicial de los actores.
    const actoresIniciales = [];
    const actorFiltradoInicial = [];
    const [listaActores, setListaActores] = useState(actoresIniciales);
    const  [actorFiltrado, setActorFiltrado] = useState(actorFiltradoInicial);

    //Creamos una función que se encargue de traer las promesas y las consuma.
    const traerListaActores = async (personas) =>{
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
        setListaActores(promesasValidacion);

    }
    
    //Realizamos una función que filtre el actor seleccionado en la lista para mostrar su información.
    const filtrarActor = (nombre)=>{
        const filtrado = listaActores.filter((actor)=>{
            //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
            return actor.name === nombre; 
        })
        //Guardamos el actor filtrado en el estado.
        setActorFiltrado(filtrado);
    }
    useEffect(() =>{
        traerListaActores(actores);
    },[]);


  return (
    <>
        <div className='contenedor-lista-actores' onClick={(evento)=>{
            if(evento.target.tagName === "H4"){//Con esta línea controlamos que solo ocurra cuando seleccione el elemento en especifico.
                filtrarActor(evento.target.dataset.id);
            }
        }}>
            <Actores actoresAMostrar={listaActores}/>
        </div>
        <div>
            <ActoresInformacion actoresInformacionAMostrar={actorFiltrado}/>
        </div>
    </>
  )
}

export default ListaActores;