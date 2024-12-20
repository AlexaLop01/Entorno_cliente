import React, { createContext, useEffect, useState } from 'react';
import { obtenerDatos } from '../../biblioteca/biblioteca.js';

const contextoPeliculas = createContext();

const ProveedorPeliculas = ({children}) => {
    //Javascript
    //Esta sección se declaran las peliculas y su información.
    //Creamos el valor de los estados iniciales.
    const listadoInicial = [];
    const erroresIniciales = "";
    const peliculaFiltradaInicial = [];
    const urlPeliculas = `https://swapi.py4e.com/api/films/`;
    //Creamos los estados.
    const [listado, setListado] = useState(listadoInicial);
    const [errores, setErrores] = useState(erroresIniciales);
    const [peliculaFiltrada, setPeliculaFiltrada] = useState(peliculaFiltradaInicial)

    //Hacemos una función la cuál haga una llamada a la API de películas y guardamos su información en el estado de listado.
    
    /*Con el async await lo que hacemos es crear una línea paralela al hilo principal, donde se realizará esta consulta
    y cuando la función de obtener datos haya finalizado, el await espera a la respuesta de la función, consume la promesa que le manda
    y lo guarda en datos , para que después se guarde en el estado.*/
    const traerListadoPeliculas = async () =>{
      try{
        const datos = await obtenerDatos(urlPeliculas);
        setListado(datos.results);

      }catch (error){
        setErrores(`Se ha producido un error: ${error}`);
      }
    }

    //Creamos una función para filtrar y que salga la información de la película seleccionada.
    const filtrarPelicula = (evento)=>{  
        if (evento.target.tagName === "H3") {
            // Se filtra el estado a través de un identificador.
            const filtrada = listado.filter((pelicula) => {
              return pelicula.episode_id === evento.target.id;
            });
            // Se cormpueban los datos y se modifica el estado planeta.
            filtrada.length
              ? setPeliculaFiltrada(filtrada[0]) // Asigno la primera posición del array que es un objeto JSON.
              : "No se ha encontrado planeta con ese nombre en la galazia.";
          } 
    }

    //En esta sección se declara los actores y su información.
    //Creamos el estado inicial de los actores.
    const actoresIniciales = [];
    const actorFiltradoInicial = [];
    const [listaActores, setListaActores] = useState(actoresIniciales);
    const  [actorFiltrado, setActorFiltrado] = useState(actorFiltradoInicial);

    //Creamos una función que se encargue de traer las promesas y las consuma.
    /*const traerListaActores = async (personas) =>{
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

    }*/
    
    //Realizamos una función que filtre el actor seleccionado en la lista para mostrar su información.
    const filtrarActor = (nombre)=>{

        const filtrado = listaActores.filter((actor)=>{
            //Es necesario poner el parseInt ya que el identificador que coge es un string por lo que no hará nada la función de eliminar.
            return actor.name === nombre; 
        })
        //Guardamos el actor filtrado en el estado.
        setActorFiltrado(filtrado[0]);
    }

    const datosExportar ={
        listado,
        errores, 
        peliculaFiltrada,
        filtrarPelicula
    }

    console.log(listado);
    
    console.log(peliculaFiltrada);
    

    //Cargamos la llamada a la API solo una vez con el useEffect.
    useEffect(() => {
      traerListadoPeliculas();
      //traerListaActores(peliculaFiltrada.actores);
    }, []);

  return (
    //JSX
    <>
        {/**Poniendo el contexto especificamos que todo lo que este en children tenga la información que colocamos en datosExportar. */}
        <contextoPeliculas.Provider value={datosExportar}>
            {children}
        </contextoPeliculas.Provider>
    </>
  )
}

export default ProveedorPeliculas;

export {contextoPeliculas};