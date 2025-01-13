import { useState, useEffect } from "react";
import { obtenerDatos } from "../biblioteca/biblioteca.js";


const useDatos = (url) => {
  const valoresInciciales = [];
  const errorInicial = "";
  const cargandInicial = false;
  /** Creación del estado para los datos. */
  const [datos, setDatos] = useState(valoresInciciales);
  const [error, setError] = useState(errorInicial);
  const [cargando, setCargando] = useState(cargandInicial);

  /**
   *  Se declara una función asíncrona para obtener los datos
   *  utilizando, la ya existente obtenerDatos.
   * */
  const getDatos = async () => {
    /** Se gestionan los errores con un try-catch */
    try {
      setCargando(true);
      const informacion = await obtenerDatos(url);

      setDatos(informacion.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  };

  const borrarDatos = () => {
    setDatos(valoresInciciales);
  };

  const retrasoDatos = () => {
    setCargando(true);
    setTimeout(() => {
      getDatos(url);
    }, 2200);
  };

  useEffect(() => {
    /** Se obtienen los datos en la carga del hook. */
    getDatos();
  }, []);

 
  return { datos, error, cargando, borrarDatos, retrasoDatos };
  /**
   * El hook no tiene extensión JSX ya que no exporta código XML,
   * sino un objeto (o cualquier otra cosa necesaria).
   * */
};

export default useDatos;