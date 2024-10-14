"use strict";

import { insertarAfter } from "../biblioteca/biblioteca.js";

//Seleccionamos el elemento.
const elementoExistente = document.body.firstElementChild;

//Creamos el nuevo.
const nuevoElemento = document.createElement("p");
nuevoElemento.textContent = 'Este es el nuevo elemento insertado.';
//Hacemos la inserción.
insertarAfter(nuevoElemento, elementoExistente);

//Selecionamos otro elemento.
const contenedor = document.getElementById("contenedor");
//Creamos otro elemento.
const nuevoElemento2 = document.createElement("p");
nuevoElemento2.textContent = 'Este es el nuevo elemento insertado 2.';
//Realizamos la inserción.
insertarAfter(nuevoElemento2, contenedor.firstElementChild);



