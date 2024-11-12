"use strict";
//Funciones del ejercicio 1.
//Función para crear números aleatorios entre un rango que queramos aplicar.
function generarNumerosAleatorios(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Función para crear checkbox con números aleatorios en su valor.
//Como parámetro pondre cuántos checkbox y en que contenedor se guardará.
function crearCheckbox(cantidad, contenedor) {
   for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = generarNumerosAleatorios(100, 1000);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = numeroAleatorio;
    checkbox.id = `checkbox ${i}`;
    
    //Creamos la etiqueta label que va junto al input de arriba.
    const label = document.createElement("label");
    label.htmlFor = `checkbox ${i}`; 
    label.innerHTML += `${numeroAleatorio}<br>`;
   
    //Colocamos tanto el input como el checkbox dentro del contenedor.
    contenedor.appendChild(checkbox);
    contenedor.appendChild(label);
    } 

}

//Función para marcar los checkbox pares.
function marcarPares(elementos){
    Array.from(elementos).map((checkbox)=>{
        if(parseInt(checkbox.value) % 2 === 0){
            checkbox.checked = true;
        }
    });
}

//Función para desmarcar todos los checkbox.
function desmarcarTodos(elementos){
    Array.from(elementos).map((checkbox)=>{
        checkbox.checked = false;
    });
}

//Funciones del ejercicio 2.
function resetearValues(){
    document.getElementById("texto-introducir").value = "";
    document.getElementById("estilo-texto").value = "";

}

function crearParrafoConEstilo(texto, estilo, contenedor){
    const mensajeError = document.getElementById("error");

    //Verificamos que cada campo tenga contenido.
    if(texto === "" || estilo === ""){
        mensajeError.classList.remove("oculta");
        return;
    }
    //Le añadimos la clase oculta al párrafo si los elementos contienen algo.
    mensajeError.classList.add("oculta");
    
    //Creamos el párrafo y le colocamos el texto y el estilo elegido.
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add(estilo);
    nuevoParrafo.textContent = texto;

    //Añadimos el párrafo al contenedor.
    contenedor.appendChild(nuevoParrafo);

    //Reseteamos los valores de los elementos.
    resetearValues();

}



export {crearCheckbox, marcarPares, desmarcarTodos, crearParrafoConEstilo};