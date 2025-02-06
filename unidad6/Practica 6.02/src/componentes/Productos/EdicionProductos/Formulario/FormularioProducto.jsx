import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductos from '../../../../hooks/useProductos.js';
import "./FormularioProducto.css";
import Errores from '../../../Errores.jsx';

const FormularioProducto = ({ actualizar }) => {
    const { id } = useParams();
    const { productoEdicion, actualizarDatoEdicion, insertarProducto, actualizarProducto, errorProducto, setProductoEdicion, obtenerProductoPorId } = useProductos();

    const [errores, setErrores] = useState([]);

    useEffect(() => {
        if (actualizar && id) {
            const producto = obtenerProductoPorId(id);
            if (producto) {
                setProductoEdicion(producto); // Guardamos el producto en el estado
            }
        }
    }, [id, actualizar]);

    // 🛑 Función para validar antes de guardar o actualizar
    const validarFormulario = () => {
        let erroresTemp = [];

        if (!productoEdicion.nombre.trim()) erroresTemp.push("El nombre es obligatorio.");
        if (!productoEdicion.peso.trim()) erroresTemp.push("El peso es obligatorio.");
        if (!productoEdicion.precio || isNaN(productoEdicion.precio) || productoEdicion.precio <= 0) {
            erroresTemp.push("El precio debe ser un número válido y mayor que 0.");
        }

        setErrores(erroresTemp);
        return erroresTemp.length === 0; // Retorna `true` si no hay errores
    };

    // ✨ Función para manejar la acción de guardar
    const manejarGuardar = () => {
        if (validarFormulario()) {
            actualizar ? actualizarProducto() : insertarProducto();
        }
    };

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
                    onChange={actualizarDatoEdicion}
                />

                <label htmlFor="peso">Peso</label>
                <input 
                    name='peso'
                    id='peso'
                    type='text'
                    value={productoEdicion.peso}
                    onChange={actualizarDatoEdicion}
                />

                <label htmlFor="precio">Precio</label>
                <input 
                    name='precio'
                    id='precio'
                    type='number'
                    value={productoEdicion.precio}
                    onChange={actualizarDatoEdicion}
                />

                <label htmlFor="imagen">Imagen</label>
                <input 
                    name='imagen'
                    id='imagen'
                    type='text'
                    value={productoEdicion.imagen}
                    onChange={actualizarDatoEdicion}
                />

                <label htmlFor="descripcion">Descripcion</label>
                <input 
                    name='descripcion'
                    id='descripcion'
                    type='text'
                    value={productoEdicion.descripcion}
                    onChange={actualizarDatoEdicion}
                />

                <button onClick={manejarGuardar}>
                    {actualizar ? "Actualizar" : "Insertar"}
                </button>

                {/* 🔴 Muestra errores si hay */}
                {errores.length > 0 && (
                    <div className="errores">
                        {errores.map((error, index) => (
                            <Errores key={index}>{error}</Errores>
                        ))}
                    </div>
                )}

                {/* 🔴 También muestra los errores del contexto */}
                {errorProducto && <Errores>{errorProducto}</Errores>}
            </div>
        </>
    );
};

export default FormularioProducto;
