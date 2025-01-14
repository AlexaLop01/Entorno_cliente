import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../config/supabase.js";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
  /** Valores iniciales para los estados */
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";

  /** Estados para proveer. */
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);

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
        setErrorUsuario(
          "Recibirás un correo electrónico para la confirmación de la cuenta."
        );
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

  /**
   * Función para iniciar sesión o crear usuario.
   * Si el usuario existe se inicia la sesión en lugar de crearla.
   */
  const iniciarSesionMagicLink = async () => {
    setErrorUsuario(errorUsuarioInicial);
    // Algo más de información en https://supabase.com/docs/guides/auth/auth-magic-link
    try {
      // Función asíncrona para iniciar sesion con el usuario (MagicLink).
      const { data, error } = await supabaseConexion.auth.signInWithOtp({
        email: datosSesion.email,
        /**
         *  No es necesario especificar la ruta de redirección
         *  ya que se encuentra especificada en el servidor.
         *  Es posible indicar una redirección diferente desde aquí si
         *  el diseño de la aplicación así lo requiere.
         * */
        options: {
          emailRedirectTo: "http://localhost:5173/",
        },
      });
      if (error) {
        throw error;
      } else {
        setErrorUsuario("Revisa tu correo electrónico para iniciar la sesión.");
      }
      // Lo reviso por consola.
      //console.log(data);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

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

      /* Imprimir usuarios por consola (data y estado).
      console.log(estado);
      console.log(data.user); */
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Función para actualizar los datos de un formulario
   * al estado "datosSesion".
   * Diseño -> ¿importar desde otro lugar?
   */
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  useEffect(() => {}, []);

  // Objeto con la información a exportar.

  const datosAExportar = {
    errorUsuario,
    crearCuenta,
    iniciarSesionMagicLink,
    cerrarSesion,
    obtenerUsuario,
    actualizarDato,
  };

  return (
    <contextoSesion.Provider value={datosAExportar}>
      {children}
    </contextoSesion.Provider>
  );
}

export default ProveedorSesion;
export { contextoSesion };