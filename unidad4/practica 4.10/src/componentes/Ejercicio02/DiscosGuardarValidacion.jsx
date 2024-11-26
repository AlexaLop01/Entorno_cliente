import {useState} from 'react';
import "./DiscosGuardarValidacion.css";
import { validarDato } from '../../bibilioteca/biblioteca.js';

const DiscosGuardarValidacion = () => {
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
    
    //Creamos un array vacío como estado inicial.
    const erroresIniciales = [];
    
    //Estado de los discos y errores.
    const [disco, setDisco] = useState(valoresIniciales);
    const [errores, setErrores] = useState(erroresIniciales);

    //Funciones para guardar y borrar los datos de los discos.
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
    
    //Funciones para validar los datos de los discos.
        const validarFormulario = (evento) =>{
            //Accedemos al elemento form que contiene el listado.
            const formulario = evento.parentNode;

            //Guardamos los errores del listado en un array.
            let erroresListado = [];

            //Recorremos cada elemento del formulario.
            for (var i = 0; i < formulario.elements.length - 1; i++) {
                // Validar dato devuelve un array con los errores de ese elemento.
                let erroresElemento = validarDato(formulario.elements[i]);
                // Se comprueba si hay errores o no (aplicando un estilo).
                erroresElemento.length !== 0
                  ? formulario.elements[i].classList.add("error")
                  : formulario.elements[i].classList.remove("error");
                // Añadimos si hay algún error en el listado de errores.
                erroresListado = [...erroresListado, ...erroresElemento];
            }

            //Cambiamos el estado con los valores de errores adquiridos en la validación de arriba.
            setErrores(erroresListado);

            return erroresListado.length === 0;
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
                  actualizarDatos(evento.target);
                }}/>
            
                <label htmlFor="grupoMusical">Introduce el grupo de música o el intérprete: </label>
                <input name="grupoMusical" type="text" placeholder='Grupo musical'
                value={disco.grupoMusical}
                onChange={(evento) =>{
                  actualizarDatos(evento.target);
                }}/>
            
                <label htmlFor="fechPublicacion">Introduce el año de publicacion: </label>
                <input name="fechPublicacion" type="number"  placeholder='XXXX'
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

              <input type="button" value="Enviar Datos" className='btn-enviar'
              onClick={(evento)=>{
                validarFormulario(evento.target);
              }}/>
            </form>
          </div>
      
      </>
    )
}

export default DiscosGuardarValidacion;