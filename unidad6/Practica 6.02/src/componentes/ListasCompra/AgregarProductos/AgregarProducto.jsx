import { useState } from "react";
import useListaCompra from "../../../hooks/useListaCompra.js";
import ListadoProductos from "../../Productos/Listados/ListadoProductos.jsx";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./AgregarProducto.css";
import { useNavigate, useParams } from "react-router-dom";

const AgregarProducto = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);
  const { ActualizacionProductosLista } = useListaCompra();
  const navegar = useNavigate();
  const { id } = useParams();

  // Estados para Snackbar
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("success");
  const [snackbarAbierto, setSnackbarAbierto] = useState(false);

  const agregarALista = (producto) => {
    setProductosAgregados((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const incrementarCantidad = (id) => {
    setProductosAgregados((prev) =>
      prev.map((p) => (p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p))
    );
  };

  const disminuirCantidad = (id) => {
    setProductosAgregados((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0)
    );
  };

  // Guardar productos en Supabase
  const guardarLista = async () => {
    if (productosAgregados.length === 0) {
      mostrarAlerta("No hay productos en la lista para guardar.", "warning");
      return;
    }

    try {
      await ActualizacionProductosLista(productosAgregados, id);
      mostrarAlerta("Lista guardada con éxito.", "success");
      setProductosAgregados([]); // Limpiar lista después de guardar
    } catch (error) {
      mostrarAlerta("Error al guardar la lista. Inténtalo de nuevo.", "error");
    }
  };

  // Función para cancelar
  const cancelarLista = () => {
    setProductosAgregados([]); // Limpiar la lista de productos agregados
    navegar("/listaCompra")
  };

  // Mostrar alerta con Snackbar
  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta(mensaje);
    setTipoAlerta(tipo);
    setSnackbarAbierto(true);
  };

  return (
    <div className="agregar-producto-container">

      <button className="guardar-btn" onClick={guardarLista}>
        Guardar
      </button>
      <button className="cancelar-btn" onClick={cancelarLista}>
        Cancelar
      </button>
        

      <h2>Productos Agregados</h2>
      <div className="productos-agregados">
        {productosAgregados.length > 0 ? (
          productosAgregados.map((producto) => (
            <div key={producto.id} className="producto-agregado">
              <img src={producto.imagen} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <div className="productos-agregados-cantidad">
                <button onClick={() => incrementarCantidad(producto.id)}>+</button>
                <p>{producto.cantidad}</p>
                <button onClick={() => disminuirCantidad(producto.id)}>-</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos agregados.</p>
        )}
      </div>

      <h2>Lista de Productos</h2>
      <ListadoProductos agregarALista={agregarALista} />

      {/* Snackbar para notificaciones */}
      <Snackbar
        open={snackbarAbierto}
        autoHideDuration={3000}
        onClose={() => setSnackbarAbierto(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarAbierto(false)} severity={tipoAlerta} sx={{ width: "100%" }}>
          {mensajeAlerta}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AgregarProducto;
