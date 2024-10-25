import './App.css';
import Cabecera from "./Estructura/Cabecera.jsx";
import Contenido from './Estructura/Contenido.jsx';
import Menu from './Estructura/Menu.jsx';
import Pie from './Estructura/Pie.jsx';
import Rutas from './Estructura/Rutas.jsx';

function App() {

  return (
    <>
    <Cabecera>
        <Menu/>
    </Cabecera>
    <Contenido>
        <Rutas/>
    </Contenido>
    <Pie/>
    </>
  )
}

export default App
