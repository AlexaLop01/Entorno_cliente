import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../config/supabase.js";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
  const navegar = useNavigate();
  /** Valores iniciales para los estados */
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const sesionIniciadaInicial = false;

  /** Estados para proveer. */
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  //Controlamos la sesión con un estado.
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

  // Antes de empezar -> configurar el servidor de Supabase.

  /**
   * Función para crear cuenta.
   * Se usa  el nombre de usuario y contraseña.
   */
  const crearCuenta = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        setErrorUsuario("Recibirás un correo electrónico para la confirmación de la cuenta.");
      }
      // Se revisa el objeto data por consola.
      //console.log(data);
    } catch (error) {
      setErrorUsuario(error.message);
    }
    /**
     * El valor de session depende de la configuración del servidor y del valor de la opción
     * Authentication -> Providers -> Email -> Confirm email:
     *    - Si está activada, se devuelve el objeto "user" y "session" es null (no hay sesión),
     *    - Si está desactivada, se devuelve tanto "user" como "session" (sesión iniciada).
     */
  };

  //Función para iniciar sesión con contraseña.
  const iniciarSesionConContrasenya = async() =>{
    try{
      let { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
      })
      if(error){
        throw error;
      }else{
        navegar("/");

      }
    }catch(error){
      setErrorUsuario(error.message);
    }
  }
  

  /**
   * Función para cerrar la sesión.
   * Funciona con cualquier método de inicio de sesión.
   */
  const cerrarSesion = async () => {
    try {
      // Se cierra la sesión en el servidor de Supabase.
      await supabaseConexion.auth.signOut();
      // Hay que redirigir la aplicación a la parte pública (<Login>).
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Función para obtener los datos del usuario/a que ha iniciado
   * la sesión y actualizar el estado.
   */
  const obtenerUsuario = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.getUser();

      if (error) {
        throw error;
      }

      setUsuario(data.user);

    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

 //Función para actualizar los datos del formulario.
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  const recuperarContrasenya = async () => {  
    try {
      const { data, error } = await supabaseConexion.auth.resetPasswordForEmail(
        datosSesion.email
      );
      if (error) {
        throw error;
      } else {
        setErrorUsuario("Recibirás un correo electrónico para restablecer la contraseña.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }    
  }

  useEffect(() => {
    //Esta función siempre estará activa y realiza su funcionamiento según detecte que la sesión se inicia o se cierra.
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
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

  // Objeto con la información a exportar.

  const datosAExportar = {
    errorUsuario,
    sesionIniciada,
    usuario,
    crearCuenta,
    iniciarSesionConContrasenya,
    cerrarSesion,
    obtenerUsuario,
    actualizarDato,
    recuperarContrasenya,
  };

  return (
    <contextoSesion.Provider value={datosAExportar}>
      {children}
    </contextoSesion.Provider>
  );
}

export default ProveedorSesion;
export { contextoSesion };