"use strict";

function censurarPalabra(palabra){
    //COnvertimos todo el contenido del body en string, buscamos la palabra deseada y lo cambiamos por el span.
    var textoCensurado = document.body.innerHTML.replaceAll(palabra, "<span class='censura'>Contenido Bloqueado</span>"); 
    //Indicamos el texto que habia anteriormente y el decimos que sea el que hemos guardado en la variable.
    document.body.innerHTML = textoCensurado;
}

function crearTabla(elemento) {
    //Creamos la tabla y le ponemos la propiedad que deseamos.
    const tabla = document.createElement("table");
    tabla.setAttribute("class","tabla-propiedad");

    //Creamos las filas y columnas , le damos el atributo deseado y colocamos los números dentro
    let numero = 1;
    for (let i = 0; i < 10; i++) {
        const fila = document.createElement("tr");


        for (let j = 0; j < 10; j++) {
            const celda = document.createElement("td");
            celda.setAttribute("class", "celda-propiedad");

            celda.textContent= numero++;

            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    elemento.appendChild(tabla);

}

function esPrimo(numero){
    if(numero <= 1) return false;
    if(numero === 2) return true;
    for (let i = 2; i < Math.sqrt(numero); i++) { //Math.sqrt devuelve la raíz cuadrada de un número.
        if(numero % i === 0) return false; //Después de que cumple la especificación del for verifica si el resto del número es cero para descartar que es un número primo.
    }
    return true;//Si el resto del número no es 0 sale y devuelve este true.
}

function generarColorAleatorio() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexadecimal[Math.floor(Math.random()*16)];
    }
    return color;
}

function generarIndiceAleatorio(array) {
    var indice = Math.floor(Math.random() * array.length);
    return indice;
}

function animarOpacidad(elemento, inicio, fin, duracion) {
    let incremento = (fin - inicio) / (duracion / 10); // Incremento en cada paso
    let opacidadActual = inicio;

    function animar() {
        opacidadActual += incremento;
        elemento.style.opacity = opacidadActual;
        if ((incremento > 0 && opacidadActual < fin) || (incremento < 0 && opacidadActual > fin)) {
            setTimeout(animar, 10); // Siguiente paso en 10ms
        }
    }
    animar();
}

export {censurarPalabra, crearTabla, esPrimo, generarColorAleatorio, generarIndiceAleatorio, animarOpacidad};
