import React,{ createContext } from 'react';

//Creamos el contexto que vamos a utilizar para compartir la información de la sesión.
const contextoSesion = createContext();

const ProveedorSesion = () => {
    //JavasScript.
    //Variables iniciales, necesitamos definir los datos de la sesión, el usuario, los errores de los mismos y la sesión iniciada.
    const sesionInicial = {
        correo: "",
        contrasenya: ""
    }
    const usuarioInicial = {};
    const errorUsuarioInicial = "";
    const sesionIniciadaInicial = false;

    //Estados de la sesión.
    const [sesion, setSesion] = useState(sesionInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

    //Funciones para la conexión con supabase.
    const crearCuenta = async () => {
    }
  return (
    //JSX.
    <div>ProveedorSesion</div>
  )
}

export default ProveedorSesion