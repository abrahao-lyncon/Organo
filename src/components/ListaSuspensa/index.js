import React from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
return (
    <div className='lista-suspensa'>
        <label>{props.name}</label>
        
        <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>
            <option value=""></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
)
}

export default ListaSuspensa