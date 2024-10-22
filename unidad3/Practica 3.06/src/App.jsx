import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contenedor from "./componentes/Contenedor.jsx";
import Inicio from "./componentes/Inicio.jsx";
import Contacto from "./componentes/Contacto.jsx";
import AcercaDe from "./componentes/AcercaDe.jsx";
import Productos from "./componentes/Productos.jsx";
import Error from './componentes/Error.jsx';
import Menu from './componentes/Menu.jsx';
import Login from './componentes/Login.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>¡Bienvenido/a a React!</h1>
        <Menu/>
        <Contenedor>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/acerca-de" element={<AcercaDe/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </Contenedor>
      </BrowserRouter>
    </>
  )
}

export default App;
