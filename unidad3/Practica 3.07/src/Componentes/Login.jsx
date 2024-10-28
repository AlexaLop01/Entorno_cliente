import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const permiso = false;
  const navegar = useNavigate();
  return (
    <>
      <h2>Inicio de sesion</h2>
      <button onClick={()=>{
        permiso ? navegar("/productos") : navegar("/no-tiene-permiso");
      }
      }>
        Comprobar si tiene sesión
      </button>
    
    </>
  )
}

export default Login;