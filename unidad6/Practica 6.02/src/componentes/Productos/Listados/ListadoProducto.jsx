import "./ListadoProducto.css";
//Esta línea de useProductos es un hook que dentro hace la llamada a su proveedor correspondiente y guarda todo el contexto.
import useProductos from '../../../hooks/useProductos.js';
import { Link } from "react-router-dom";

const ListadoProducto = ({datos, borrado=false, actualizar=false}) => {
  const {borrarProducto} = useProductos();

  const confirmarDelete = () => {
    const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar el producto "${datos.nombre}"?`);
    if (confirmacion) {
      borrarProducto(datos.id);
    }
  };
  console.log("esfesfsfnhufuhs",datos);
  
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
        {actualizar && (
          <Link to={`/edicionProductos/editar/${datos.id}`}>
          <button>Editar</button>
          </Link>
        )}


      </div>
    </>
  )
}

export default ListadoProducto