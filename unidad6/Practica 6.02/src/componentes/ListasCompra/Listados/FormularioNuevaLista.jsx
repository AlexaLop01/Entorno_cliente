import React, { useState, useEffect } from "react";
import useListaCompra from "../../../hooks/useListaCompra.js";
import "./FormularioNuevaLista.css";

const FormularioNuevaLista = ({ actualizar, nombreLista, idLista, onCancelar }) => {
  const { actualizarNombreLista, datosFormulario, actualizarDatoLista, crearLista, setDatosFormulario } = useListaCompra();
  const [error, setError] = useState("");

  useEffect(() => {
    if (actualizar && nombreLista) {
      setDatosFormulario((prev) => ({ ...prev, nombre_lista: nombreLista }));
    }
  }, [actualizar, nombreLista]); // Eliminamos actualizarDatoLista para evitar bucles

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!datosFormulario.nombre_lista.trim()) {
      setError("El nombre de la lista no puede estar vacío.");
    } else {
      setError("");
      if (actualizar) {
        actualizarNombreLista(idLista, { nombre_lista: datosFormulario.nombre_lista });
        if (onCancelar) onCancelar(); // Cerrar edición después de actualizar
      } else {
        crearLista();
      }
    }
  };

  return (
    <div className="card-formulario">
      <h3>{actualizar ? "Editar Lista" : "Crear Nueva Lista"}</h3>
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
        <div className="botones-contenedor">
          <button className="boton-crear" type="button" onClick={manejarEnvio}>
            {actualizar ? "Guardar Cambios" : "Crear Lista"}
          </button>
          {actualizar && (
            <button className="boton-cancelar" type="button" onClick={onCancelar}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormularioNuevaLista;
