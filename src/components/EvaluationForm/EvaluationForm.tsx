import React from 'react'
import styles from './EvaluationForm.module.css'
import { useNavigate } from 'react-router-dom'

const EvaluationForm = () => {

    const navigate = useNavigate()

    const handleSumbitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        navigate('/')
    }

    return (
        <form onSubmit={handleSumbitForm}>
            <label htmlFor="name">Nombre: </label>
            <input name='name' type="text" placeholder='Ingresa tu nombre'/>

            <label htmlFor="email">Email: </label>
            <input name='email' type="email" placeholder='Ingresa tu email'/>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default EvaluationForm