
const Alerta = ({ tipo, children, datos, handleCerrarAlerta }) => {
    const clases = {
        success: 'alerta-exito',
        warning: 'alerta-advertencia',
        error: 'alerta-error',
    };

    return (
        <div className="alerta">
        <h2>Datos del formulario:</h2>
        <p><strong>Nombre</strong>: {datos.nombre}</p>
        <p><strong>Email</strong>: {datos.email}</p>
        <p><strong>Mensaje</strong>: {datos.mensaje}</p>
        <button className="button" onClick={handleCerrarAlerta}>Cerrar</button>
    </div>
    );
};

export default Alerta