"use strict";
//Función para validar los datos de los inputs.
const validarDato = (elemento) =>{
    //Desestructuramos el elemento que nos entra por parámetro.
    const {name, value} = elemento;

    //Creamos una variable donde se guardarán los errores.
    let erroresElemento = [];

    //Comprobación del campo nombreDisco.
    if (name === "nombreDisco") {
        // Se comprueba si tiene algo escrito.
        if (!value.length) {
          erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor.`,
          ];
        }
        // Se comprueba si cumple los requisitos.
        if (!/^[a-zA-Z][a-zA-Z0-9 ]{5,}$/.test(value))
          erroresElemento = [
            ...erroresElemento,
            `El nombre debe tener mínimo 5 caracteres y no puede comenzar con un número.`,
          ];
    }

    //Comprobación del grupo musical.
    if (name === "grupoMusical") {
        // Se comprueba si tiene algo escrito.
        if (!value.length) {
          erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor.`,
          ];
        }
        // Se comprueba si cumple los requisitos.
        if (!/^[a-zA-Z][a-zA-Z0-9 ]{5,}$/.test(value))
          erroresElemento = [
            ...erroresElemento,
            `El grupo musical o interprete debe tener mínimo 5 caracteres y no puede comenzar con un número.`,
          ];
    }

    //Comprobación del año de publicación.
    if (name === "fechPublicacion") {
        // Se comprueba si tiene algo escrito.
        if (!value.length) {
          erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor.`,
          ];
        }
        // Se comprueba si cumple los requisitos.
        if (!/^\d{4,}$/.test(value))
          erroresElemento = [
            ...erroresElemento,
            `El año de publicación debe contener un mínimo de 4 números.`,
          ];
    }

    //Comprobación de la localización.
    if (name === "localizacion") {
        // Se comprueba si tiene algo escrito.
        if (!value.length) {
          erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor.`,
          ];
        }
        // Se comprueba si cumple los requisitos.
        if (!/^ES-\d{3}[A-Z]{2}$/.test(value))
          erroresElemento = [
            ...erroresElemento,
            `La localización de la estantería debe tener el formato ES-001AA.`,
          ];
    }

    //Comprobación del tipo de música.
    if (name === "tipoMusica") {
        // Se comprueba si tiene algo escrito.
        if (!value.length) {
          erroresElemento = [
            ...erroresElemento,
            `El campo ${name} debe tener un valor.`,
          ];
        }
    }

    //Este return devuelve el listado de errores o si no hay ninguno pues no devuelve ninguno.
    return erroresElemento;
    
}

export {validarDato};