// rafce

import Alerta from "./components/Alerta"



//CONTENEDOR

const InicioApp = () => {


  return (
    <div>
      <Alerta tipo="success">
        <h2>¡Operación exitosa!</h2>
      </Alerta>
      <Alerta tipo="warning">
        <h2>¡Atención! Esto es una advertencia.</h2>
      </Alerta>
      <Alerta tipo="error">
        <h2>¡Error! Algo salió mal.</h2>
      </Alerta>
    </div>
  )
}

export default InicioApp