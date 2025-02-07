import React from "react";
import "./ListaCompra.css";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";

const ListaCompra = ({ nombre, precioTotal, pesoTotal }) => {
  // Convertir precioTotal a número seguro y formatearlo en euros
  const precioFormateado = !isNaN(precioTotal) ? `${parseFloat(precioTotal).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €` : "0,00 €";

  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="card-title">{nombre}</h3>
        <p className="total-info">
          Precio total: <span>{precioFormateado}</span>
        </p>
        <p className="total-info">
          Peso total: <span>{pesoTotal} kg</span>
        </p>
      </div>
      <div className="card-actions">
        <button className="icon-button add-button">
          <AddShoppingCartIcon /> Añadir productos
        </button>
        <button className="icon-button view-button">
          <VisibilityIcon /> Ver contenido
        </button>
        <button className="icon-button delete-button">
          <DeleteIcon /> Eliminar lista
        </button>
      </div>
    </div>
  );
};

export default ListaCompra;
