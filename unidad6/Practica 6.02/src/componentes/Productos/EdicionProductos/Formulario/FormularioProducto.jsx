import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductos from '../../../../hooks/useProductos.js';
import "./FormularioProducto.css";
import Errores from '../../../Errores.jsx';

// 📌 Importamos los componentes de Material UI
import { Snackbar, Alert } from '@mui/material';

const FormularioProducto = ({ actualizar }) => {
    const { id } = useParams();
    const { productoEdicion, actualizarDatoEdicion, insertarProducto, actualizarProducto, errorProducto, setProductoEdicion, obtenerProductoPorId } = useProductos();

    const [errores, setErrores] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para la alerta
    const [mensajeSnackbar, setMensajeSnackbar] = useState(""); // Mensaje de la alerta

    useEffect(() => {
        if (actualizar && id) {
            const producto = obtenerProductoPorId(id);
            if (producto) {
                setProductoEdicion(producto);
            }
        }
    }, [id, actualizar]);

    const validarFormulario = () => {
        let erroresTemp = [];

        if (!productoEdicion.nombre.trim()) erroresTemp.push("El nombre es obligatorio.");
        if (!productoEdicion.peso.trim()) erroresTemp.push("El peso es obligatorio.");
        if (!productoEdicion.precio || isNaN(productoEdicion.precio) || productoEdicion.precio <= 0) {
            erroresTemp.push("El precio debe ser un número válido y mayor que 0.");
        }

        setErrores(erroresTemp);
        return erroresTemp.length === 0;
    };

    const manejarGuardar = () => {
        if (validarFormulario()) {
            if (actualizar) {
                actualizarProducto();
                setMensajeSnackbar("✅ Producto actualizado con éxito.");
            } else {
                insertarProducto();
                setMensajeSnackbar("✅ Producto insertado con éxito.");
            }
            setOpenSnackbar(true); // Abre la alerta
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

                <label htmlFor="descripcion">Descripción</label>
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

                {errores.length > 0 && (
                    <div className="errores">
                        {errores.map((error, index) => (
                            <Errores key={index}>{error}</Errores>
                        ))}
                    </div>
                )}

                {errorProducto && <Errores>{errorProducto}</Errores>}

                {/* 📢 Snackbar para mostrar la alerta */}
                <Snackbar 
                    open={openSnackbar} 
                    autoHideDuration={3000} 
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Alert 
                        onClose={() => setOpenSnackbar(false)} 
                        severity="success"
                        variant="filled"
                    >
                        {mensajeSnackbar}
                    </Alert>
                </Snackbar>
            </div>
        </>
    );
};

export default FormularioProducto;
