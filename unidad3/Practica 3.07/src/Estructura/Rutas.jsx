import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../Componentes/Inicio.jsx";
import AcercaDe from "../Componentes/AcercaDe.jsx";
import Error from "../Componentes/Error.jsx";
import Peliculas from "../Componentes/Peliculas.jsx";
import listado from "../objetos/peliculas.json";
import Interpretes2 from "../Componentes/Interpretes2.jsx";

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/peliculas" element={<Peliculas listado={listado.peliculas}/>}>
              
            </Route>
            <Route path="/interpretes" element={<Interpretes2/>}/>
            <Route path="/acerca-de" element={<AcercaDe/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>

  )
}

export default Rutas;