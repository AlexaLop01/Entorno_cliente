import React from "react";
import ListaCompra from "./ListaCompra.jsx";
import "./ListasCompra.css";

const ListasCompra = () => {
  const listasEjemplo = [
    { id: 1, nombre: "Supermercado", precioTotal: 120.5, pesoTotal: 15 },
    { id: 2, nombre: "Electrónica", precioTotal: 450, pesoTotal: 3.2 },
    { id: 3, nombre: "Limpieza", precioTotal: 85.75, pesoTotal: 8.5 },
    { id: 4, nombre: "Papelería", precioTotal: 30.0, pesoTotal: 2.1 },
    { id: 5, nombre: "Mascotas", precioTotal: 60.99, pesoTotal: 5.3 },
    { id: 6, nombre: "Ropa", precioTotal: 200.0, pesoTotal: 4.7 },
  ];

  return (
    <div className="listas-container">
      {listasEjemplo.length > 0 ? (
        <div className="listas-grid">
          {listasEjemplo.map((lista) => (
            <ListaCompra
              key={lista.id}
              nombre={lista.nombre}
              precioTotal={lista.precioTotal}
              pesoTotal={lista.pesoTotal}
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
