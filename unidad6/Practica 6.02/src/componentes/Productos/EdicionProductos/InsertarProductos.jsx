import FormularioProducto from './Formulario/FormularioProducto.jsx';
import ListadoProducto from '../Listados/ListadoProducto.jsx';
//Esta línea de useProductos es un hook que dentro hace la llamada a su proveedor correspondiente y guarda todo el contexto.
import useProductos from '../../../hooks/useProductos.js';

const InsertarProductos = () => {
  const { ListadoProductoInsertados } = useProductos();

  return (
    <>
      <FormularioProducto />
      {ListadoProductoInsertados.length > 0 && (
        <>
          <h2>Productos Insertados</h2>
          <div className="contenedorListado">
            {ListadoProductoInsertados.map((producto) => (
              <ListadoProducto key={producto.id} datos={producto} borrado={false} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default InsertarProductos;
