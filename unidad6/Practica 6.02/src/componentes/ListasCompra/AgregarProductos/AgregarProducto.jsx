import { useState, useEffect } from "react";
import useListaCompra from "../../../hooks/useListaCompra.js";
import ListadoProductos from "../../Productos/Listados/ListadoProductos.jsx";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./AgregarProducto.css";
import { useNavigate, useParams } from "react-router-dom";
import useProductos from "../../../hooks/useProductos.js";

const AgregarProducto = () => {
  const { listadoProductos } = useProductos();
  const {
    ActualizacionProductosLista,
    productosAgregados,
    setProductosAgregados,
    obtenerProductoLista,
  } = useListaCompra();
  const navegar = useNavigate();
  const { id } = useParams();

  const [productosOriginales, setProductosOriginales] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
  
      const productosLista = await obtenerProductoLista(id);
      
      if (listadoProductos.length > 0) {
        const productosConDetalles = productosLista.map((p) => {
          const productoEncontrado = listadoProductos.find(
            (prod) => prod.id === p.id_producto // Asegurar la correcta comparación
          );
          return productoEncontrado
            ? { ...p, ...productoEncontrado, id_producto: p.id_producto } 
            : { id_producto: p.id_producto, cantidad: p.cantidad };
        });
        
  
        setProductosAgregados(productosConDetalles);
      }
    };
  
    cargarDatos();
  }, [id, listadoProductos]);
  
  
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

  const incrementarCantidad = (id_producto) => {
    setProductosAgregados((prev) =>
      prev.map((p) =>
        p.id_producto === id_producto ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };
  
  
  const disminuirCantidad = (id) => {
    setProductosAgregados((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
        )
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
  
      // Recargar los productos desde la base de datos después de guardarlos
      const productosActualizados = await obtenerProductoLista(id);
  
      if (listadoProductos.length > 0) {
        const productosConDetalles = productosActualizados.map((p) => {
          const productoEncontrado = listadoProductos.find(
            (prod) => prod.id === p.id_producto
          );
          return productoEncontrado
            ? { ...p, ...productoEncontrado }
            : { id_producto: p.id_producto, cantidad: p.cantidad };
        });
  
        setProductosAgregados(productosConDetalles);
      }
  
      mostrarAlerta("Lista guardada con éxito.", "success");
      navegar("/listaCompra");
    } catch (error) {
      mostrarAlerta("Error al guardar la lista. Inténtalo de nuevo.", "error");
      console.error("Error al guardar la lista:", error);
    }
  };
  

  // Función para cancelar
  const cancelarLista = () => {
    setProductosAgregados(productosOriginales); // Restaurar productos originales.
    navegar("/listaCompra"); // Luego navegar de vuelta.
  };

  // Mostrar alerta con Snackbar
  const mostrarAlerta = (mensaje, tipo) => {
    setMensajeAlerta(mensaje);
    setTipoAlerta(tipo);
    setSnackbarAbierto(true);
  };

  return (
    <div className="agregar-producto-container">
      <button
        className="guardar-btn"
        onClick={(e) => {
          e.preventDefault;
          guardarLista();
        }}
      >
        Guardar
      </button>
      <button className="cancelar-btn" onClick={cancelarLista}>
        Cancelar
      </button>

      <h2>Productos Agregados</h2>
      <div className="productos-agregados">
        {productosAgregados.length > 0 ? (
          productosAgregados.map((producto) => (
            <div
              key={`${producto.id}-${
                producto.cantidad
              }`}
              className="producto-agregado"
            >
              <img src={producto.imagen} alt={producto.nombre} />
              <h4>{producto.nombre}</h4>
              <div className="productos-agregados-cantidad">
                <button onClick={() => incrementarCantidad(producto.id)}>
                  +
                </button>
                <p>{producto.cantidad}</p>
                <button onClick={() => disminuirCantidad(producto.id)}>
                  -
                </button>
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
        <Alert
          onClose={() => setSnackbarAbierto(false)}
          severity={tipoAlerta}
          sx={{ width: "100%" }}
        >
          {mensajeAlerta}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AgregarProducto;
