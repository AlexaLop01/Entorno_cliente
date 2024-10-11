"use strict"

//Definimos las partidas de juan.
let partida1Juan = 89;
let partida2Juan = 120;
let partida3Juan = 103;

//Definimos las partidas de Miguel.
let partida1Miguel = 116;
let partida2Miguel = 94;
let partida3Miguel = 123;

//Definimos las partidas de María para utilizarlas más tarde.
let partida1Maria = 97;
let partida2Maria = 134;
let partida3Maria = 105;

//Definimos la función que calculará la media de cada equipo y mejor media.

function calcularMedia(partida1, partida2, partida3) {
    return (partida1 + partida2 + partida3) / 3;
}

function mejorMedia2Jugadores(media1, media2) {

    if (media1 > media2) {
        return `El ganador es Juan. Con una media de ${media1}.`;
    }
    else if (media2 > media1) {
        return `El ganador es Miguel. Con una media de ${media2}.`;
    }
    else{
        return `Hay empate en el juego.`;
    }
    
}

//Esta función es para la última parte del ejercicio donde se incluye a María en los resultados.
function mejorMedia3Jugadores(media1, media2, media3) {

    if (media1 > media2 && media1 > media3) {
        return `El ganador es Juan. Con una media de ${media1}.`;
    }
    else if (media2 > media1 && media2 > media3) {
        return `El ganador es Miguel. Con una media de ${media2}.`;
    }
    else if (media3 > media1 && media3 > media2) {
        return `La ganadora es Maria. Con una media de ${media3}.`;
    }
    else{
        return `Hay empate en el juego.`;
    }
    
}


//Guardamos los resultados de la función.
let mediaJuan = calcularMedia(partida1Juan, partida2Juan, partida3Juan);
let mediaMiguel = calcularMedia(partida1Miguel, partida2Miguel, partida3Miguel);
let mejorMediaJuanMiguel = mejorMedia2Jugadores(mediaJuan, mediaMiguel);

//Imprimimos los resultados.
console.log(`La media de Juan es ${mediaJuan}.`);
console.log(`La media de Miguel es ${mediaMiguel}.`);
console.log(`${mejorMediaJuanMiguel}`);

//En la segunda parte del ejercicio nos porpone añadir a Maria en estos resultados.
let mediaMaria = calcularMedia(partida1Maria, partida2Maria, partida3Maria);
let mejorMediaJuanMiguelMaria = mejorMedia3Jugadores(mediaJuan, mediaMiguel, mediaMaria);

//Imprimimos el resultado de María.
console.log(`La media de María es ${mediaMaria}.`);
console.log(`${mejorMediaJuanMiguelMaria}`);