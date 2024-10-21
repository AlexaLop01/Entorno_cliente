
import "../css/Interprete.css";

const Interprete = (props) => {
    //Javascript
    const {nombre, fechaNacimiento, foto, biografia} = props;
    return (
        //JSX
        <>
            <div className="interprete-contenedor">
                <img className="interprete-imagen" src={foto} alt='Actor' />
                <div className="interprete-informacion">
                    <h1>{nombre}</h1>
                    <p>{fechaNacimiento}</p>
                    <p>{biografia}</p>
                </div>
            </div>
        </>
    );
};

export default Interprete;