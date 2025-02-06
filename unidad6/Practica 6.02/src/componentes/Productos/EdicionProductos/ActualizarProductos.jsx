import React from 'react'
import FormularioProducto from './Formulario/FormularioProducto.jsx';
import ListadoProductos from '../Listados/ListadoProductos.jsx';

const ActualizarProductos = () => {
  return (
    <>
      <ListadoProductos actualizar = {true}/>
      {/*<FormularioProducto actualizar={true}/>*/}
    </>
    
  )
}

export default ActualizarProductos