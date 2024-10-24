import './App.css';
import Cabecera from "./componentes/Cabecera.jsx";
import Contenido from './componentes/Contenido.jsx';
import Menu from './componentes/Menu.jsx';
import Pie from './componentes/Pie.jsx';
import Rutas from './componentes/Rutas.jsx';

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
