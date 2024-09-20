"use strict"

//Definimos la función que calculará el precio final de un producto.
function calcularPrecioFinal(producto = "Producto genérico", precio = 100, impuesto = 21) {
    //Usamos isNaN para verificar si alguno de los números introducidos son erroneos.
    if(isNaN(precio) || isNaN(impuesto)){
        console.error("Error!. Los números introducidos no son válidos.");
        return;
    }

    //Definimos el calculo en caso de que los numeros sean correctos.
    let precioFinal = precio + (precio * (impuesto / 100));

    //Mostramos por consola el resultado.
    console.log(`Producto: ${producto}.`);
    console.log(`Su precio final es ${precioFinal}.`);
    
}

//Prueba para ver la opción con los parámetros por defecto.
calcularPrecioFinal(); 

//Prueba rellenando los parámetros bien y erróneamente.
calcularPrecioFinal("Teléfono", 1200, 15);
calcularPrecioFinal("Ordenador", "?", 10);


