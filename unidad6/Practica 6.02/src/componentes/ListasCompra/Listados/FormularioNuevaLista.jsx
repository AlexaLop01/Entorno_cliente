import React, { useState } from "react";
import useListaCompra from "../../../hooks/useListaCompra.js";
import "./FormularioNuevaLista.css"; // Archivo CSS separado para estilos

const FormularioNuevaLista = () => {
  const { actualizarDatoLista, crearLista, datosFormulario } = useListaCompra();
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!datosFormulario.nombre_lista.trim()) {
      setError("El nombre de la lista no puede estar vacío.");
    } else {
      setError("");
      crearLista();
    }
  };

  return (
    <div className="card-formulario">
      <h3>Crear Nueva Lista</h3>
      <form className="formulario">
        <label htmlFor="nombre_lista">Nombre</label>
        <input
          className="input-texto"
          name="nombre_lista"
          id="nombre_lista"
          value={datosFormulario.nombre_lista}
          onChange={actualizarDatoLista}
          type="text"
          placeholder="Ej. Supermercado"
        />
        {error && <p className="mensaje-error">{error}</p>}
        <button className="boton-crear" type="button" onClick={manejarEnvio}>
          Crear Lista
        </button>
      </form>
    </div>
  );
};

export default FormularioNuevaLista;
