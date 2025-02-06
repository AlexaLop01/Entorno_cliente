import {useContext} from 'react';
import { contextoProductos } from '../contextos/ProveedorProductos.jsx';

const useProductos = () => {
    const datosPorductos = useContext(contextoProductos);
    return datosPorductos;
}

export default useProductos;