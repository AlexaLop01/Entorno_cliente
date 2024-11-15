import {useState} from 'react';
import Discentes from './Discentes.jsx';
import listadoDiscientes from "../objetos/matriculados.json";


const Matricula = () => {
    //Javascript
    const valorInicial = listadoDiscientes.discentes;
    const [discentes, setDiscentes] = useState(valorInicial);

    const filtrar2DAW =()=>{
      const filtro2daw = discentes.filter((discente)=>{
        return discente.curso === "2DAW";
      })
      setDiscentes(filtro2daw);
    }
  return (
    //JSX
    <>
    <div>
        <h2>Discentes filtrados por: </h2>
        <button onClick={()=>{
          filtrar2DAW();
        }}>2º DAW</button>
        <button>Primer curso</button>
        <button>DAW</button>
        <button>Aficion lectura</button>
        <button>Apellidos</button>
        <button>Reiniciar Listado</button>
        {/*El último sería que al clicar en un discente desaparezca el listado */}
      
      <div>
          <Discentes discentes={discentes}/>
      </div>
        
    </div>
    </>
  )
}

export default Matricula;