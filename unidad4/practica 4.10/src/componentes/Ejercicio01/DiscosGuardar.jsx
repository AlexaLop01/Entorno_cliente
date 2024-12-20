import {useState} from 'react';
import "./DiscosGuardar.css";

const DiscosGuardar = () => {
    //Javascript
    //Creamos una objeto con los valores iniciales vacíos.
    const valoresIniciales ={
      nombreDisco: "",
      grupoMusical: "",
      fechPublicacion: "",
      localizacion: "",
      tipoMusica: "",
      prestado: "",
    };

    //Estado de los discos
    const [disco, setDisco] = useState(valoresIniciales);

    const actualizarDatos = (evento) =>{
      //Desestructuramos los elementos que necesitamos del input que entra por evento.
      const {name, value} = evento;
      //Guardamos los datos desestructurados en el estado.
      setDisco({...disco, [name]: value});

    }

    //Realizamos una función para actualizar el checkbox.
    const actualizaciónDatoCheck = (evento) =>{
      const {name} = evento;
      const value = disco[name] ? "" : evento.value;
      setDisco({...disco, [name]: value});
    }

    //Función para borrar. 
    const borrarFormulario = () =>{
      setDisco(valoresIniciales);
    }

  return (
    //JSX
    <>
        <div>
          <form className='contenedor-formulario'>
            <fieldset className='contenedor-datos-formulario'>
              <legend>Datos del disco</legend>
              <label htmlFor="nombreDisco">Introduce el nombre del disco: </label>
              <input name="nombreDisco" type="text" placeholder='Nombre del disco'
              value={disco.nombreDisco}
              onChange={(evento) =>{
                console.log(evento);
                actualizarDatos(evento.target);
              }}/>
          
              <label htmlFor="grupoMusical">Introduce el grupo de música o el intérprete: </label>
              <input name="grupoMusical" type="text" placeholder='Grupo musical'
              value={disco.grupoMusical}
              onChange={(evento) =>{
                actualizarDatos(evento.target);
              }}/>
          
              <label htmlFor="fechPublicacion">Introduce el año de publicacion: </label>
              <input name="fechPublicacion" type="number" min="1900" max="2024" placeholder='XXXX'
              value={disco.fechPublicacion}
              onChange={(evento) =>{
                actualizarDatos(evento.target);
              }}/>
            
              <label htmlFor="localizacion">Introduce su localización (Estantería):</label>
              <input name="localizacion" type="text" placeholder='ES-001AA'
              value={disco.localizacion}
              onChange={(evento) =>{
                actualizarDatos(evento.target);
              }}/>

            <fieldset>
              <legend>Select tipo de musica:</legend>
                <label htmlFor="tipoMusica">Introduce el tipo de música: </label>
                <select name="tipoMusica" 
                onChange={(evento) =>{
                  console.log(evento);
                actualizarDatos(evento.target);
                }}>
                    <option value="">-- Selecciona un tipo de música --</option>
                    <option value="rock">Rock</option>
                    <option value="progressive">Progressive</option>
                    <option value="punk">Punk</option>
                    <option value="trash">Trash</option>
                </select>
            </fieldset>

            <fieldset>
              <legend>Checkbox</legend>
              <label htmlFor="prestado">¿El disco es prestado?</label>
              <input name="prestado" type="checkbox"
              value="si"
              checked={disco.prestado === "si"}
              onChange={(evento) =>{
                actualizaciónDatoCheck(evento.target);
              }}/><br/>
            </fieldset>
            </fieldset>
            <input type="button" value="Borrar formulario" className='btn-borrar'
            onClick={()=>{
              borrarFormulario();
            }} />
          </form>
        </div>
    
    </>
  )
}

export default DiscosGuardar;