import React from 'react'
import ListadoProductos from '../Listados/ListadoProductos.jsx';

const BorrarProductos = () => {
  return (
    <>
      <ListadoProductos borrado={true}/>
    </>
  )
}

export default BorrarProductos