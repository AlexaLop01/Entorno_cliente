import React from 'react'

const DiscosGuardar = () => {
    //Javascript
    //Creamos una objeto con los valores iniciales vacíos.
    const valoresIniciales ={
      nombreDisco: "",
      grupoMusical: "",
      fechPublicacion: "",
      tipoMusica: "",
      localizacion: "",
      prestado: "",
    };

    //Estado de los discos
    const [disco, setDisco] = useState(valoresIniciales);

    const actualizarDatos = (evento) =>{
      //Desestructuramos los elementos que necesitamos del input que entra por evento.
      const {name, value} = evento;

      setDisco({...discente, [name]: value});

    }

  return (
    //JSX
    <>
        <div>DiscosGuardar</div>
    
    </>
  )
}

export default DiscosGuardar;