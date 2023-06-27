import React from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {

    const [nome, setNome]     = useState("") 
    const [cargo, setCargo]   = useState("") 
    const [imagem, setImagem] = useState("") 
    const [time, setTime] = useState("") 
  
  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({nome, cargo, imagem, time})

    setNome("")
    setCargo("")
    setImagem("")
  }

  return (
    <div className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do Colaborador</h2>
            <CampoTexto 
            required={true} 
            label="Nome" 
            placeholder="Digite seu nome aqui..." 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto 
            required={true}
            label="Cargo" 
            placeholder="Digite seu Cargo aqui..." 
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />

            <CampoTexto 
            label="Imagem" 
            placeholder="Digite o caminho da imagem aqui..." 
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa  
            name="Selecione seu Time"
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />

            <Botao>
              Criar Card
            </Botao> 
        </form>
    </div>
  )
}

export default Formulario