import React from 'react';
import "./Aficiones.css"

const Aficiones = (props) => {
    //Javascript
    const {aficiones} = props;
  return (
    //JSX
    <>
    <div className='contendor-aficiones'>
      <ul>
        {aficiones.map((aficion, indice)=>{
                return(
                    <li key={indice} className='elemento-aficion'> {aficion}</li>
                );
            })
        }

      </ul>
    </div>
    </>
  )
}

export default Aficiones;