import React,{ useContext } from 'react'
import { contextoProductos } from '../../../../contextos/ProveedorProductos.jsx';
import "./FormularioProducto.css";
import Errores from '../../../Errores.jsx';

const FormularioProducto = ({actualizar}) => {
    const { productoEdicion, actualizarDatoEdicion, insertarProducto, actualizarProducto , errorProducto } = useContext(contextoProductos);
  return (
    <>
      <div className='contenedorFormularioEdicion'>
        <h3>{actualizar ? "Actualizar Producto" : "Insertar Producto"}</h3>
        <label htmlFor="nombre">Nombre</label>
        <input 
        name='nombre'
        id='nombre'
        type='text'
        value={productoEdicion.nombre}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="peso">Peso</label>
        <input 
        name='peso'
        id='peso'
        type='text'
        value={productoEdicion.peso}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="precio">Precio</label>
        <input 
        name='precio'
        id='precio'
        type='number'
        value={productoEdicion.precio}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="imagen">Imagen</label>
        <input 
        name='imagen'
        id='imagen'
        type='text'
        value={productoEdicion.imagen}
        onChange={actualizarDatoEdicion}/>

        <label htmlFor="descripcion">Descripcion</label>
        <input 
        name='descripcion'
        id='descripcion'
        type='text'
        value={productoEdicion.descripcion}
        onChange={actualizarDatoEdicion}/>

        <button onClick={(e)=>{
            actualizar? actualizarProducto() : insertarProducto();
        }}>
            {actualizar ? "Actualizar": "Insertar" }
        </button>
        {errorProducto && <Errores>{errorProducto}</Errores>}
      </div>
    </>
  )
}

export default FormularioProducto