import React, { useContext } from 'react';
import FormularioProducto from './Formulario/FormularioProducto.jsx';
import { contextoProductos } from '../../../contextos/ProveedorProductos.jsx';
import ListadoProducto from '../Listados/ListadoProducto.jsx';

const InsertarProductos = () => {
  const { ListadoProductoInsertados } = useContext(contextoProductos);

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
