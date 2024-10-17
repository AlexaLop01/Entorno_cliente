const obtenerNumeroAleatorio =() =>{
    return Math.floor(Math.random() * 1000) + 1;
}

function generarColorAleatorio() {
    const hexadecimal = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexadecimal[Math.floor(Math.random()*16)];
    }
    return color;
}

export {obtenerNumeroAleatorio, generarColorAleatorio};