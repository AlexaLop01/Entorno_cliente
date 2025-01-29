import React,{ createContext ,useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseConnection } from '../config/supabase.js';

//Creamos el contexto que vamos a utilizar para compartir la información de la sesión.
const contextoSesion = createContext();

const ProveedorSesion = ({children}) => {
    //JavasScript.
    //Variables iniciales, necesitamos definir los datos de la sesión, el usuario, los errores de los mismos y la sesión iniciada.
    const sesionInicial = {
        correo: "",
        contrasenya: ""
    }
    const usuarioInicial = {};
    const errorUsuarioInicial = "";
    const sesionIniciadaInicial = false;

    //Uso de la navegación de React Router.
    const navegar = useNavigate();

    //Estados de la sesión.
    const [sesion, setSesion] = useState(sesionInicial);
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
    const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

    //Funciones para la conexión con supabase.
    //Crear cuenta.
    const crearCuenta = async () => {
        try{
            const { data, error} = await supabaseConnection.auth.signUp({
                email: sesion.correo,
                password: sesion.contrasenya
            });
            if(error){
                throw error;
            }else{
                setErrorUsuario("Recibirás un correo electrónico para la confirmación de la cuenta.");
            }
        }catch(error){
            setErrorUsuario(error.message);
        }
    };
    //Iniciar sesión con contraseña.
    const iniciarSesionConContrasenya = async () => {
        try{
            const { data, error } = await supabaseConnection.auth.signInWithPassword({
                email: sesion.correo,
                password: sesion.contrasenya
            });
            if(error){
                throw error;
            }else{
                navegar("/");
                setUsuario(data);
                setSesionIniciada(true);
            }
        }catch(error){
            setErrorUsuario(error.message);
        }
    };
    //Cerrar sesión.
    const cerrarSesion = async () => {
        try{
            await supabaseConnection.auth.signOut();
            navegar("/login");
        }catch(error){
            setErrorUsuario(error.message);
        }
    };


    //Obtener los datos del usuario.
    const obtenerUsuario = async () => {
        try {
          const { data, error } = await supabaseConnection.auth.getUser();
          if (error) {
            throw error;
          }
          setUsuario(data.user);
        } catch (error) {
          setErrorUsuario(error.message);
        }
    };

    //Actualizamos los datos que se introducen en los inputs del componente de login.
    const actualizarDato = (evento)=>{
        //Guardamos lo que nos viene por parámetro en una desestructuración para después poder cambiar estos cambios en el estado de sesión.
        const { name , value } = evento.target;
        setSesion({ ...sesion , [name] : value});
    }

    useEffect(() => {
        //Esta función siempre estará activa y realiza su funcionamiento según detecte que la sesión se inicia o se cierra.
        const suscripcion = supabaseConnection.auth.onAuthStateChange(
          (event, session) => {
            // Se comprueba si hay sesión.
            if (session) {
              // Si hay sesión se carga la parte privada de la web.
              navegar("/");
              setSesionIniciada(true);
              // Información del usuario que tiene sesión iniciada.
              obtenerUsuario();
            } else {
              // Si no hay sesión, se redirige a la parte pública de la web.
              navegar("/login");
              setSesionIniciada(false);
            }
          }
        );
      }, []);

    const datosParaProveer = {
        //Estados.
        sesion,
        errorUsuario,
        usuario,
        sesionIniciada,

        //Funciones.
        crearCuenta,
        iniciarSesionConContrasenya,
        cerrarSesion,
        actualizarDato
    }
  return (
    //JSX.
    <contextoSesion.Provider value={datosParaProveer}>
        {children}
    </contextoSesion.Provider>
  )
}

export default ProveedorSesion;
export { contextoSesion }; 