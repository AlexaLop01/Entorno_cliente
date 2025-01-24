import React, { useContext } from 'react';
import { contextoProductos } from '../../../contextos/ProveedorProductos.jsx';
import "./FiltrosProductosOrdenados.css";

const FiltrosProductosOrdenados = () => {
  const { ordenarProductos } = useContext(contextoProductos);
  return (
    <>
    <h2>Ordenar los Productos</h2>
    <div className='contenedorBotonesOrdenar'>
      <button onClick={() => ordenarProductos('nombre', true)}>Nombre Ascendente</button>
      <button onClick={() => ordenarProductos('nombre', false)}>Nombre Descendente</button>
      <button onClick={() => ordenarProductos('precio', true)}>Precio Ascendente</button>
      <button onClick={() => ordenarProductos('precio', false)}>Precio Descendente</button>
      <button onClick={() => ordenarProductos('peso', true)}>Peso Ascendente</button>
      <button onClick={() => ordenarProductos('peso', false)}>Peso Descendente</button>

    </div>
    </>
  )
}

export default FiltrosProductosOrdenados