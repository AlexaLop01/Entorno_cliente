import React, { useContext } from 'react';
import { contextoProductos } from '../../contextos/ProveedorProductos.jsx';
import "./FiltrosProductos.css";

const FiltrosProductos = () => {
    const { listadoProductosFiltrado, borrarFiltros, actualizarDatosProducto, filtrosProductos , filtros} = useContext(contextoProductos);
  return (
    <>
        <div className='contenedorFiltros'>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input 
  type="text" 
  id="nombre" 
  name="nombre" 
  placeholder="Nombre del producto."
  value={filtros.nombre}
  onChange={actualizarDatosProducto} // Pasa el evento directamente
/>
            </div>
            <div>
                <label htmlFor="precio">Precio:</label>
                <input
  type="number"
  id="precio"
  name="precio"
  placeholder="Precio del producto."
  value={filtros.precio}
  onChange={actualizarDatosProducto} // Pasa el evento directamente
/>
            </div>
            <div>
                <label htmlFor="peso">Peso:</label>
                <input
  type="text"
  id="peso"
  name="peso"
  placeholder="Peso del producto."
  value={filtros.peso}
  onChange={actualizarDatosProducto} // Pasa el evento directamente
/>
            </div>

            <button onClick={() => filtrosProductos(filtros)}>
                Aplicar filtros
            </button>
            <button onClick={() => borrarFiltros()}>
  Limpiar filtros
</button>

        </div>

    </>
  )
}

export default FiltrosProductos