import './App.css'
import ProveedorSesion from './contextos/ProveedorSesion.jsx';
import Cabecera from './estructura/Cabecera.jsx';
import Navegacion from './estructura/Navegacion.jsx';
import Contenido from './estructura/Contenido.jsx';
import Pie from './estructura/Pie.jsx';

function App() {

  return (
    <>
      <ProveedorSesion>
          <Cabecera/>
          <Navegacion/>
          <Contenido>

          </Contenido>
          <Pie/>
      </ProveedorSesion>
    </>
  )
}

export default App
