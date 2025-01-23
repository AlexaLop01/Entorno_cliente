import React from 'react'

const ListadoProducto = ({datos}) => {
  
  return (
    <>
      <div>
        <h3>{datos.nombre}</h3>
        <p>- {datos.precio}€</p>
        <p>- {datos.peso}</p>
        <p>- {datos.descripcion}</p>
      </div>
    </>
  )
}

export default ListadoProducto