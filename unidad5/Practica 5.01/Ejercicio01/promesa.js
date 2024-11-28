"use strict";

window.onload = ()=>{
    //Creamos la promesa, con los dos parámetros de resolver y rechazar.
    const promesa = new Promise((resolve, reject)=>{
        //Creamos el setTimeout donde pondremos la función que vamos a realizar de número aleatorio entre 0 y 100.
        const idSetTimeOut = setTimeout(()=>{
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            if(numeroAleatorio % 2 === 0){
                //Colocamos que devuelve el caso de que resuelva.
                resolve(numeroAleatorio);
            }else{
                //Colocamos el error que queremos que salga cuando sea rechazado.
                reject(new Error(`El valor del número aleatorio es impar: ${numeroAleatorio}`));
            }
        }, 1000);
    })

    //En esta parte usamos el then y el catch para que salgan las respuestas adquiridas en la función de la promesa creada anteriormente.
    promesa.then((datos)=>{
        //Si la respuesta es resuelta aparece este log.
        console.log(`El valor del número aleatorio es par: ${datos}`);
    })
    .catch((error) =>{
        //Si la respuesta se trata de un error aparece este log.
        console.log(error.message);
    })
}