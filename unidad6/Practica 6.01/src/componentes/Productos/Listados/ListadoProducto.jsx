import React from 'react';
import "./ListadoProducto.css"

const ListadoProducto = ({datos}) => {
  
  return (
    <>
      <div className="contenedorProducto">
        <h3>{datos.nombre}</h3>
        <p>{datos.precio}€</p>
        <p>{datos.peso}</p>
        <p>{datos.descripcion}</p>
      </div>
    </>
  )
}

export default ListadoProducto