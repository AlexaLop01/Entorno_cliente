
import { convertirCani } from "../biblioteca/biblioteca.js";
import { quijoteFrases } from "./quijoteFrases.js";

let frasesQuijote = [...quijoteFrases];

//Empezar desde la frase 18 del array de quijote.
let fraseIndex = 17;
const idInterval = setInterval(()=>{
    const tabla = document.getElementById("bodyTabla");
    //Creamos las etiquetas que queremos que pase el innerHTML y posteriormente dentro colocamos la posición que deseamos con la variable creada anteriormente.
    //Después convertimos la frase que cogemos del array por cani.
    tabla.innerHTML += `<tr>
    <td>${frasesQuijote[fraseIndex]}</td>
    <td>${convertirCani(frasesQuijote[fraseIndex])}</td>
    </tr>`;
    fraseIndex++;

    //Cuando llegue el índice de frases a 24 terminará el intervalo.
    if (fraseIndex >= 23) {
        clearInterval(idInterval);
    }
}, 2000);