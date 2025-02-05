import React,{ useContext } from 'react';
import { contextoProductos } from '../../../contextos/ProveedorProductos.jsx';
import "./ListadoProducto.css"

const ListadoProducto = ({datos, borrado=false}) => {
  const {borrarProducto} = useContext(contextoProductos);

  const confirmarDelete = () => {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${datos.nombre}"?`);
    if (confirmacion) {
      borrarProducto(datos.id);
    }
  };
  
  return (
    <>
      <div className="contenedorProducto" id={datos.id}>
        <img src={datos.imagen} alt={datos.nombre} />
        <h3>{datos.nombre}</h3>
        <div className="contenedorPrecioPeso">
          <p>{datos.peso}</p>
          <p>{datos.precio}€</p>
        </div>
        <p>{datos.descripcion}</p>
        {borrado && <button onClick={confirmarDelete}>Eliminar</button>}
      </div>
    </>
  )
}

export default ListadoProducto