
const Alerta = ({ tipo, children }) => {
    const clases = {
        success: 'alerta-exito',
        warning: 'alerta-advertencia',
        error: 'alerta-error',
    };

    return (
        <div className={`alerta ${clases[tipo]}`}>
        {children}
        </div>
    );
};

export default Alerta