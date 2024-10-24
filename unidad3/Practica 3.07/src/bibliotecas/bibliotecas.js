//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };
  

  const quitarApariencia = (referencia) => {
    referencia.current.classList.toggle("desaparecer");
  }
export { generarUuidAleatorio , quitarApariencia};