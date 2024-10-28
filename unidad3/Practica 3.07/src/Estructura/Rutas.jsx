import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../Componentes/Inicio.jsx";
import AcercaDe from "../Componentes/AcercaDe.jsx";
import Error from "../Componentes/Error.jsx";
import Peliculas from "../Componentes/Peliculas.jsx";
import listado from "../objetos/peliculas.json";
import Interpretes2 from "../Componentes/Interpretes2.jsx";
import Movies from "../Componentes/Movies.jsx";
import Directores from "../Componentes/Directores.jsx";
import Galeria from "../Componentes/Galeria.jsx";
import Login from "../Componentes/Login.jsx";

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            //Contendrá un submenú de películas.
            <Route path="/peliculas" element={<Peliculas listado={listado.peliculas}/>}>
              <Route path="movies" element={<Movies/>}/>
              <Route path="interpretes" element={<Interpretes2/>}/>
              <Route path="directores" element={<Directores/>}/>
            </Route>
            //Contendrá un submenú de galería.
            <Route path="/galeria" element={<Galeria/>}>
              <Route path="movies" element={<Movies/>}/>
              <Route path="interpretes" element={<Interpretes2/>}/>
              <Route path="directores" element={<Directores/>}/>
            </Route>
            <Route path="/interpretes" element={<Interpretes2/>}/>
            <Route path="/acerca-de" element={<AcercaDe/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </>

  )
}

export default Rutas;