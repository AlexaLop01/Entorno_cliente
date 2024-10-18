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

function cambiarColorElemento(referencia) {
    const color = generarColorAleatorio();
    referencia.current.style.backgroundColor= color;
}

function incrementar(referencia) {
    let valorActual = parseInt(referencia.current.textContent) || 0;
    if ( valorActual >=0) {
        valorActual ++;
        referencia.current.textContent = valorActual;
    }
}

function decrementar(referencia) {
    let valorActual = parseInt(referencia.current.textContent) || 0;
    if ( valorActual >0) {
        valorActual --;
        referencia.current.textContent = valorActual;
    }
}

export {obtenerNumeroAleatorio, generarColorAleatorio, cambiarColorElemento, incrementar, decrementar};