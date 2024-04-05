import './App.css';
import React,{useState} from 'react';
import Boton from './comoponentes/Boton';
import Contador from './comoponentes/Contador';
const recove=[0];
function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic=() =>{
    
    setNumClics(numClics+1)
    recove.push(numClics+1)
    
  }
  const reiniciarContador=()=>{
  
    setNumClics(0)

    
  }
  function mostrarNumeroGuardado(){
    setNumClics(recove[recove.length-1])
  }

  return (
    <div className="App">
     
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Click'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeReiniciar={true}
          manejarClic={reiniciarContador}/>

         <Boton
          texto='recuperar'
          esBotonDeReiniciar={false}
          manejarClic={mostrarNumeroGuardado}/>  
      </div>
      
    </div>
  );
}

export default App;
