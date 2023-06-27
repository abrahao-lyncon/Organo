import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';


function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Data-Science',
      corPrimaria:'#a6d157',
      corSecundaria:'#fof8e2'
    },
    {
      nome:'Devops',
      corPrimaria:'#e06b69',
      corSecundaria:'#fde7e8'
    },
    {
      nome:'Ux e UI',
      corPrimaria:'#db6ebf',
      corSecundaria:'#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#ffba05',
      corSecundaria:'#fff5d9'
    },
    {
      nome:'Gestão e Inovação',
      corPrimaria:'#ff8a29',
      corSecundaria:'#ffeedf'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
     <Banner />

     <Formulario times={times.map(times => times.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

     {times.map(times => <Time 
     key={times.nome} 
     nome={times.nome} 
     corPrimaria={times.corPrimaria} 
     corSecundaria={times.corSecundaria}
     colaboradores={colaboradores.filter(colaborador => colaborador.time === times.nome)}
     
     />)}
     <Rodape />

    </div>
  );
}

export default App;
