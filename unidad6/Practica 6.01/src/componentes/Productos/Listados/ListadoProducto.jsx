import React from 'react';
import "./ListadoProducto.css"

const ListadoProducto = ({datos}) => {
  
  return (
    <>
      <div className="contenedorProducto">
        <img src={datos.imagen} alt={datos.nombre} />
        <h3>{datos.nombre}</h3>
        <div className="contenedorPrecioPeso">
          <p>{datos.peso}</p>
          <p>{datos.precio}€</p>
        </div>
        <p>{datos.descripcion}</p>
      </div>
    </>
  )
}

export default ListadoProducto