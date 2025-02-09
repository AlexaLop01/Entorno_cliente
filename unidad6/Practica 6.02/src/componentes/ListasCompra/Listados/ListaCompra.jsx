import React, { useState } from "react";
import "./ListaCompra.css";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import useListaCompra from "../../../hooks/useListaCompra.js";
import { Link } from "react-router-dom";

const ListaCompra = ({ id, nombre, precioTotal, pesoTotal }) => {
  const { borrarLista } = useListaCompra(); // Obtener la función desde el proveedor
  const [dialogoAbierto, setDialogoAbierto] = useState(false);

  // Formatear el precio en euros
  const precioFormateado = !isNaN(precioTotal)
    ? `${parseFloat(precioTotal).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
    : "0,00 €";

  // Abrir el diálogo de confirmación
  const confirmarBorrar = () => {
    setDialogoAbierto(true);
  };

  // Cerrar diálogo sin eliminar
  const cancelarEliminacion = () => {
    setDialogoAbierto(false);
  };

  // Llamar a la función del proveedor para borrar la lista
  const eliminarLista = () => {
    borrarLista(id);
    setDialogoAbierto(false);
  };

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
        <Link to={`/agregarProductos/${id}`}>
          <button className="icon-button add-button">
            <AddShoppingCartIcon /> Añadir productos
          </button>
        </Link>
        <button className="icon-button view-button">
          <VisibilityIcon /> Ver contenido
        </button>
        <button className="icon-button delete-button" onClick={confirmarBorrar}>
          <DeleteIcon /> Eliminar lista
        </button>
      </div>

      {/* Diálogo de confirmación para eliminar una lista */}
      <Dialog open={dialogoAbierto} onClose={cancelarEliminacion}>
        <DialogTitle>Eliminar Lista</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar la lista "{nombre}"? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelarEliminacion} color="primary">Cancelar</Button>
          <Button onClick={eliminarLista} color="secondary">Eliminar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ListaCompra;
