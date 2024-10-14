"use strict";

//En este apartado con getElementsByTagName lo que hacemos es coger todas las etiquetas del tipo que le ponemos entre las comillas.
const parrafos= document.getElementsByTagName("p");

//El texto del segundo párrafo.
const segundoParrafo= document.body.firstElementChild.nextElementSibling;

//Número de enlaces de la página.
const enlaces = document.getElementsByTagName("a");

//La dirección del primer enlace y del penúltimo.
const primerEnlace = enlaces[0].getAttribute("href");
const penúltimoEnlace = enlaces[enlaces.length - 2].getAttribute("href");



//El getElementById coge los elementos que contengan ese nombre.
const idTimeOut = setTimeout(()=>{
    const info = document.getElementById("info");
    info.innerHTML += `<p>Se han encontrado <strong>${parrafos.length}</strong> párrafos en el documento.</p>`;
    //Esta forma de hacerlo es cogiendo el posicionamiento relativo del párrafo que queremos.
    info.innerHTML += `<p>El contenido del segundo párrafo es: ${segundoParrafo?.innerHTML ? segundoParrafo.innerHTML : "No existe el párrafo"}.</p>`;
    //Esta forma reutilizamos parrafos y como es un documento dónde se guardan todos los párrafos elegimos el segundo y la ternaria que hemos utilizado sirve para verificar que el párrafo existe, si no existe sacará la frase.
    info.innerHTML += `<p>El contenido desde el objeto iterable es: ${parrafos[1]?.innerHTML ? parrafos[1].innerHTML : "No existe el párrafo"}</p>`;
    info.innerHTML += `<p>Se han encontrado <strong>${enlaces.length}</strong> enlaces en el documento.</p>`;
    info.innerHTML += `<p>La dirección del primer enlace es: ${primerEnlace? primerEnlace : "No existe el enlace"}.</p>`;
    info.innerHTML += `<p>La dirección del penúltimo enlace es: ${penúltimoEnlace? penúltimoEnlace : "No existe el enlace"}.</p>`;
}, 2000);