//Esta línea de useProductos es un hook que dentro hace la llamada a su proveedor correspondiente y guarda todo el contexto.
import useProductos from "../../../hooks/useProductos";
import "./FiltrosProductos.css";

const FiltrosProductos = () => {
  const {
    borrarFiltros,
    actualizarDatosProducto,
    filtrosProductos,
    filtros,
    borrarCampos
  } = useProductos();

  

  return (
    <>
      <h3>Filtrar los Productos</h3>
      <div id="contenedorFiltros">
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
      </div>
      <div id="contenedorBotonesFiltros">
        <button onClick={() => filtrosProductos(filtros)}>
          Aplicar filtros
        </button>
        <button onClick={() =>{
          borrarFiltros(),
          borrarCampos()
        }}>Limpiar filtros</button>
      </div> 
      
    </>
  );
};

export default FiltrosProductos;
