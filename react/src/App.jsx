import './App.css';
import Contenedor from './componentes2.7/Contenedor.jsx';
import Interprete from './componentes2.7/Interprete.jsx';

function App() {
 
  return (
    <>
      <Contenedor>
        <Interprete nombre='Feo' foto='https://cdn-icons-png.flaticon.com/512/742/742836.png'>
          Esta es la biografia del feo.
        </Interprete>
      </Contenedor>
    </>
  )
};

export default App;
