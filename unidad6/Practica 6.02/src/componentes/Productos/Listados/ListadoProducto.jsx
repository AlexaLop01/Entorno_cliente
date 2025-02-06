import { useState } from "react";
import { Link } from "react-router-dom";
import "./ListadoProducto.css";
import useProductos from '../../../hooks/useProductos.js';

// 📌 Importamos Material UI
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography } from "@mui/material";

const ListadoProducto = ({ datos, borrado = false, actualizar = false }) => {
  const { borrarProducto } = useProductos();
  const [openDialog, setOpenDialog] = useState(false); // Estado para abrir/cerrar el diálogo

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const confirmarDelete = () => {
    borrarProducto(datos.id);
    setOpenDialog(false); // Cerrar el diálogo después de eliminar
  };

  return (
    <>
      <div className="contenedorProducto" id={datos.id}>
        <img src={datos.imagen} alt={datos.nombre} />
        <h3>{datos.nombre}</h3>
        <div className="contenedorPrecioPeso">
          <p>{datos.peso}</p>
          <p>{datos.precio}€</p>
        </div>
        <p>{datos.descripcion}</p>
        
        {borrado && <button onClick={handleOpenDialog}>Eliminar</button>}

        {actualizar && (
          <Link to={`/edicionProductos/editar/${datos.id}`}>
            <button>Editar</button>
          </Link>
        )}
      </div>

      {/* 📌 Cuadro de confirmación Material UI */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Eliminar Producto</DialogTitle>
        <DialogContent>
          <Typography>¿Estás seguro de que deseas eliminar el producto "{datos.nombre}"?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={confirmarDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ListadoProducto;
