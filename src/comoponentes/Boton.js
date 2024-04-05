import React from "react";
import '../hojas-de-estilo/Boton.css';
function Boton({ texto, esBotonDeClic, manejarClic,esBotonDeReiniciar}){
  return(
    <button 
      className={ esBotonDeClic ? 'boton-clic': 'boton-clic' && esBotonDeReiniciar?'boton-reiniciar':'boton-recuperar' }
      onClick={manejarClic}>
      {texto}
    </button>
  )
}
export default Boton;