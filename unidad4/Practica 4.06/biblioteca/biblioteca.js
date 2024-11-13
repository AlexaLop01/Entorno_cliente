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
//Función para resetear los valores.
function resetearValues(){
    document.getElementById("texto-introducir").value = "";
    document.getElementById("estilo-texto").value = "";

}

//Función para crear párrafo con estilo.
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

//Funciones del ejercicio 3.
//Función para guardar un disco.
function guardarDisco(formulario , listaDiscos) {
    const nombreDisco = document.getElementById('nombre-disco').value.trim();
    const grupoMusical = document.getElementById('grupo-musical').value.trim();
    const any = document.getElementById('fech-publicacion').value;
    const tipoMusica = document.getElementById('tipo-musica').value;
    const localizacion = document.getElementById('localizacion').value.trim();
    const prestado = document.getElementById('prestado').checked;
    const mensaje = document.getElementById("mensaje");


    // Creamos un nuevo objeto disco.
    const nuevoDisco = {
        nombreDisco,
        grupoMusical,
        any: parseInt(any),
        tipoMusica,
        localizacion,
        prestado
    };

    // Añadimos el objeto disco a la lista de discos.
    listaDiscos.discos.push(nuevoDisco);
    
    // Reseteamos los campos después de guardar el disco.
    formulario.reset();

    // Añadimos un mensaje para el usuario de que se ha guardado correctamente.
    mensaje.textContent = `El disco ha sido guardado correctamente`;
}

function mostrarDiscos(contenedor, listaDiscos) {
    
    contenedor.innerHTML = ''; // Limpiar el contenido anterior

    if (listaDiscos.discos.length === 0) {
      contenedor.innerHTML = '<p>No hay discos guardados.</p>';
      return;
    }

    // Crear el listado de discos formateado
    listaDiscos.discos.map((disco, index) => {
        const discoDiv = document.createElement("div");
        discoDiv.classList.add("disco");

        discoDiv.innerHTML = `
          <h3>Disco ${index + 1}: ${disco.nombreDisco} (${disco.any})</h3>
          <p><strong>Grupo:</strong> ${disco.grupoMusical}</p>
          <p><strong>Tipo de Música:</strong> ${disco.tipoMusica}</p>
          <p><strong>Localización:</strong> ${disco.localizacion}</p>
          <p><strong>Prestado:</strong> ${disco.prestado ? "Sí" : "No"}</p>
        `;

        contenedor.appendChild(discoDiv);
    });
}

//Funciones del ejercicio 4.
//Función para actualizar las poblaciones.
//Pasamos por parámetros los select y el objeto de arrays de las poblaciones.
function actualizarPoblaciones(selectProvincias, selectPoblacion, poblaciones) {
    //Guardamos el valor de las provincias.
    const provinciaSeleccionada = selectProvincias.value;

    //Reseteamos las poblaciones que hayan quedado anteriormente.
    selectPoblacion.innerHTML = `<option value="">-- No seleccionado--</option>`; 

    if(provinciaSeleccionada && poblaciones[provinciaSeleccionada]){
        poblaciones[provinciaSeleccionada].map((poblacion)=>{
            const option = document.createElement("option");
            option.value = poblacion;
            option.textContent = poblacion;
            selectPoblacion.appendChild(option);
        });
    }
}

//Funciones del ejercicio 5.
//Función que muestre el error que se usará dentro de la validación del formulario.
function mostrarError(campo, mensaje) {
    const mensajeError = document.getElementById("mensaje");
    campo.classList.add("input-error");
    campo.previousElementSibling.classList.add("label-error");
    mensajeError.textContent = mensaje;
   
  }

//Función que resetee el error de la validación.
function resetearEstilos(campo) {
    campo.classList.remove("input-error");
    campo.previousElementSibling.classList.remove("label-error");
}



//Función para hacer la validación del formulario.
function validacionFormulario( formulario, listaDiscos) {
    const nombreDisco = document.getElementById("nombre-disco");
    const grupoMusical = document.getElementById("grupo-musical");
    const any = document.getElementById("fech-publicacion");
    const tipoMusica = document.getElementById("tipo-musica");
    const localizacion = document.getElementById("localizacion");

    // Reseteamos los estilos de error
    resetearEstilos(nombreDisco);
    resetearEstilos(grupoMusical);
    resetearEstilos(any);
    resetearEstilos(tipoMusica);
    resetearEstilos(localizacion);

    let esValido = true;

    // Validación del nombre del disco (mínimo 5 caracteres)
    if (nombreDisco.value.trim().length < 5) {
      mostrarError(nombreDisco, "El nombre del disco debe tener al menos 5 caracteres.");
      esValido = false;
    }

    // Validación del grupo de música (mínimo 5 caracteres)
    if (grupoMusical.value.trim().length < 5) {
      mostrarError(grupoMusical, "El grupo de música debe tener al menos 5 caracteres.");
      esValido = false;
    }

    // Validación del año de publicación (debe tener 4 caracteres y estar entre 1900 y 2024)
    const year = parseInt(any.value);
    if (any.value.length !== 4 || isNaN(year) || year < 1900 || year > 2024) {
      mostrarError(anyoPublicacion, "El año de publicación debe ser un número de 4 dígitos entre 1900 y 2024.");
      esValido = false;
    }

    // Validación del tipo de música (debe seleccionarse una opción válida)
    if (tipoMusica.value === "") {
      mostrarError(tipoMusica, "Selecciona un tipo de música.");
      esValido = false;
    }

    // Validación de la localización (formato ES-001AA)
    const localizacionRegex = /^ES-\d{3}[A-Z]{2}$/;
    if (!localizacionRegex.test(localizacion.value.trim())) {
      mostrarError(localizacion, "La localización debe tener el formato ES-001AA.");
      esValido = false;
    }

    // Mostrar mensaje de éxito si todo es válido
    if (esValido) {
      mensaje.textContent = "El disco se ha guardado correctamente.";
      mensaje.classList.remove("error");
      
      //Después de ser validado guardamos el disco con los datos pertienentes.
      guardarDisco(formulario, listaDiscos);
    } else {
      mensaje.innerHTML += "Por favor, corrige los errores marcados.";
      mensaje.classList.add("error");
    }
  }

  


export {crearCheckbox, marcarPares, desmarcarTodos, crearParrafoConEstilo, guardarDisco, mostrarDiscos, actualizarPoblaciones, validacionFormulario};