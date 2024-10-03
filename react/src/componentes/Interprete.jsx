import "./Interprete.css";

const Interprete = (props) => {
    //Javascript
    const {children, nombre, foto} = props;
    return (
        //JSX
        <>
            <div className="interprete-contenedor">
            <img className="interprete-imagen" src={foto} alt='Feo' />
            <h1>{nombre}</h1>
            <h3>{children}</h3>
            </div>
        </>
    );
};

export default Interprete;