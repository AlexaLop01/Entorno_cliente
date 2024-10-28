import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import SubmenuGaleria from '../Estructura/SubmenuGaleria.jsx';

const Galeria = () => {
    const navegar = useNavigate();
  return (
    <>
    <h2>Panel de administración de Galeria</h2>
        <div>
            <SubmenuGaleria/>
        </div>
        <div>
            <Outlet/>
        </div>
        <button onClick={()=>{
            navegar("/");
        }}>Volver a Inicio</button>
    </>
  )
}

export default Galeria