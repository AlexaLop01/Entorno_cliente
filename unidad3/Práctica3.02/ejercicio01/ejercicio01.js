"use strict";

const text = document.body.innerHTML;
console.log(text);

const span = document.createElement("span");
    span.innerHTML= `Contenido Bloqueado`;
    span.setAttribute("class", "censura");
console.log(span);



