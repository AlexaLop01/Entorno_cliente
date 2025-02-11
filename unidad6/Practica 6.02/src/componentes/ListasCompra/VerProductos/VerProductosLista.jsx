import React, { useEffect, useState } from "react";
import useListaCompra from "../../../hooks/useListaCompra.js";
import { useParams } from "react-router-dom";
import "./VerProductosLista.css";

const ContenidoLista = () => {
  const { listas, obtenerProductosListaContenido, obtenerPrecioPesoProducto } = useListaCompra();
  const { id } = useParams(); // Obtiene el ID de la lista desde la URL
  const [productos, setProductos] = useState([]);
  const [nombreLista, setNombreLista] = useState("");

  obtenerPrecioPesoProducto(id);

  
  const cargarProductos = async () => {
    const productosObtenidos = await obtenerProductosListaContenido(id);
    setProductos(productosObtenidos);
  };
  useEffect(() => {
      const listaSeleccionada = listas.find((lista) => lista.id === id);
      if (listaSeleccionada) {
          setNombreLista(listaSeleccionada.nombre_lista);
        }
    cargarProductos();
  }, [listas, id]);

  return (
    <div className="contenido-lista">
      <h2>Contenido de {nombreLista}</h2>
      {productos.length > 0 ? (
        <ul className="lista-productos">
          {productos.map((producto, index) => (
            <li key={index} className="producto-item">
                <img src={producto.imagen} alt={producto.nombre} />
                <h4>{producto.nombre}</h4> 
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: {producto.precio} €</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos en esta lista.</p>
      )}
    </div>
  );
};

export default ContenidoLista;
