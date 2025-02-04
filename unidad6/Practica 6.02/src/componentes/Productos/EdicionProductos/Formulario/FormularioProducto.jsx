import React,{ useContext } from 'react'
import { contextoProductos } from '../../../../contextos/ProveedorProductos.jsx'

const FormularioProducto = ({actualizar}) => {
    const { productoEdicion, actualizarDatoEdicion } = useContext(contextoProductos);
  return (
    <>
        <label htmlFor="nombre"></label>
        <input 
        name='nombre'
        id='nombre'
        type='text'
        value={productoEdicion.nombre}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="peso"></label>
        <input 
        name='peso'
        id='peso'
        type='text'
        value={productoEdicion.peso}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="precio"></label>
        <input 
        name='precio'
        id='precio'
        type='number'
        value={productoEdicion.precio}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="imagen"></label>
        <input 
        name='imagen'
        id='imagen'
        type='url'
        value={productoEdicion.imagen}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="descripcion"></label>
        <input 
        name='descripcion'
        id='descripcion'
        type='text'
        value={productoEdicion.descripcion}
        onChange={actualizarDatoEdicion}/>

        <button onClick={(e)=>{
            actualizar? "": "";
        }}>
            {actualizar ? "Actualizar Producto": "Insertar Producto" }
        </button>
    </>
  )
}

export default FormularioProducto