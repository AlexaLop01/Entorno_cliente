//Esta línea de useProductos es un hook que dentro hace la llamada a su proveedor correspondiente y guarda todo el contexto.
import useProductos from '../../../hooks/useProductos.js';
import "./FiltrosProductosOrdenados.css";

const FiltrosProductosOrdenados = () => {
  const { ordenarProductos } = useProductos();
  return (
    <>
    <h3>Ordenar los Productos</h3>
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