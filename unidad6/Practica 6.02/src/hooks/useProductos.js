import {useContext} from 'react';
import { contextoProductos } from '../contextos/ProveedorProductos.jsx';

const useProductos = () => {
    const datosProductos = useContext(contextoProductos);
    return datosProductos;
}

export default useProductos;