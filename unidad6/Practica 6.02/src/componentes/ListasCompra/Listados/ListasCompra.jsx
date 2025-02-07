import React from "react";
import ListaCompra from "./ListaCompra.jsx";
import useListaCompra from "../../../hooks/useListaCompra.js";
import FormularioNuevaLista from "./FormularioNuevaLista.jsx";
import "./ListasCompra.css";

const ListasCompra = () => {
  const { listas, formularioVisible, cambiarVisibilidadFormulario } = useListaCompra();

  return (
    <div className="listas-container">
      <div>
        <button className="btn-nueva-lista" onClick={cambiarVisibilidadFormulario}>
          + Nueva Lista
        </button>
        {formularioVisible && <FormularioNuevaLista />}
      </div>

      {listas.length > 0 ? (
        <div className="listas-grid">
          {listas.map((lista) => (
            <ListaCompra
              key={lista.id}
              id={lista.id}
              nombre={lista.nombre_lista}
            />
          ))}
        </div>
      ) : (
        <p className="mensaje-vacio">No hay listas de compras disponibles</p>
      )}
    </div>
  );
};

export default ListasCompra;
