// rafce

import Tarjeta from "./components/Tarjeta"


//CONTENEDOR

const InicioApp = () => {


  return (
    <div className="container mt-3 p-2">
      
      <Tarjeta nombre="Juan Ignacio Restrepo Restrepo" profesion='Electricista' foto='electricista.jpg' />
    </div>
  )
}

export default InicioApp