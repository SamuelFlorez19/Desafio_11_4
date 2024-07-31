import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [datos, setDatos] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = {
        nombre,
        email,
        mensaje,
        };
        setDatos(datos)
        setMostrarAlerta(true)
    };

    const handleCerrarAlerta = () => {
        setMostrarAlerta(false);
    };
    

    

    return (
        <div className="formulario-contacto">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
            <label className="label">
            Nombre:
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            </label>
            <br />
            <label className="label">
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <br />
            <label className="label">
            Mensaje:
            <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
            </label>
            <br />
            <button className="button" type="submit">Enviar</button>
        </form>
        {mostrarAlerta && (
        <Alerta
            tipo="success"
            datos={datos}
            handleCerrarAlerta={handleCerrarAlerta}
        />
        )}
        </div>
    );
};

export default Formulario;
