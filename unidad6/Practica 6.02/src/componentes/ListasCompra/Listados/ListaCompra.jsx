import React, { useState, useEffect } from "react";
import "./ListaCompra.css";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import useListaCompra from "../../../hooks/useListaCompra.js";
import { Link } from "react-router-dom";

const ListaCompra = ({ id, nombre }) => {
  const { borrarLista, obtenerPrecioPesoProducto } = useListaCompra(); 
  const [dialogoAbierto, setDialogoAbierto] = useState(false);
  const [totales, setTotales] = useState({ precioTotal: 0, pesoTotal: 0 });

  const obtenerTotales = async () => {
    const { precioTotal, pesoTotal } = await obtenerPrecioPesoProducto(id);
    setTotales({
      precioTotal,
      pesoTotal,
    });
  };

  useEffect(() => {
    obtenerTotales();
  }, [id]);

  // Formatear el precio en euros
  const precioFormateado = !isNaN(totales.precioTotal)
    ? `${parseFloat(totales.precioTotal).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
    : "0,00 €";

  const confirmarBorrar = () => {
    setDialogoAbierto(true);
  };

  const cancelarEliminacion = () => {
    setDialogoAbierto(false);
  };

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
          Peso total: <span>{totales.pesoTotal.toFixed(2)} kg</span>
        </p>

        {/* Mensaje sobre el medio de transporte según el peso total */}
        <p className="total-info">
          {totales.pesoTotal > 10 ? (
            <>
              Es mejor ir en coche <span style={{ fontSize: "1.5rem" }}>🚗</span>
            </>
          ) : (
            <>
              Puedes ir andando <span style={{ fontSize: "1.5rem" }}>🚶</span>
            </>
          )}
        </p>
      </div>

      <div className="card-actions">
        <Link to={`/agregarProductos/${id}`}>
          <button className="icon-button add-button">
            <AddShoppingCartIcon /> Añadir productos
          </button>
        </Link>
        <Link to={`/verContenido/${id}`}>
          <button className="icon-button view-button">
            <VisibilityIcon /> Ver contenido
          </button>
        </Link>
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
