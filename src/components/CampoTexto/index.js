import React from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input type="text" value={props.valor} placeholder={props.placeholder} required={props.required} onChange={aoDigitado}/>
    </div>
  )
}

export default CampoTexto