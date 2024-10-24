import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import AcercaDe from "./AcercaDe";
import Error from "./Error";
import Peliculas from "../componentesPeliculas/Peliculas";
import listado from "../objetos/peliculas.json";

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/peliculas" element={<Peliculas listado={listado.peliculas}/>}/>
            <Route path="/acerca-de" element={<AcercaDe/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>

  )
}

export default Rutas;