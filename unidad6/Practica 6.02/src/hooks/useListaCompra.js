import { useContext } from 'react';
import { contextoListaCompra } from '../contextos/ProveedorListaCompra.jsx';


const useListaCompra = () => {
  const datosLista = useContext(contextoListaCompra);
  return datosLista;
}

export default useListaCompra;