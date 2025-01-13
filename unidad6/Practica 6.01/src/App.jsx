
import './App.css'
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Rutas from './componentes/Rutas/Rutas.jsx';
import Navegacion from './estructura/Navegacion.jsx';
import Pie from './estructura/Pie.jsx';

function App() {

  return (
    <>
      <Cabecera/>
      <Navegacion/>
      <Contenido>
        <Rutas/>
      </Contenido>
      <Pie/>
    </>
  )
}

export default App
