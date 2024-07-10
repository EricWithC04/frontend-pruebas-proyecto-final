import React, { useState } from 'react'
import styles from './EvaluationForm.module.css'
import { useNavigate } from 'react-router-dom'

const EvaluationForm = ({ idEvaluation, questions }: { idEvaluation: number, questions: Array<any> }) => {

    const navigate = useNavigate()

    const [answers, setAnswers] = useState<Array<boolean>>([])

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch(`http://localhost:3001/evaluation/${answers.length < 10 ? 'theme' : 'unit'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answers
            })
        })
            .then(res => res.json())
            .then(data => {
                alert(`Has ${data.approved ? 'aprobado' : 'reprobado'} la evaluación \n Tu calificación es: ${data.points}`)

                if (data.approved) {
                    fetch(`http://localhost:3001/${
                        answers.length < 10 ? `theme_progress/1/${idEvaluation}` : `unit_progress/1/${idEvaluation - 30}`
                    }`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ complete: true })
                    })
                        .then(_res => navigate('/'))
                        .catch(err => console.error(err))
                } else {
                    navigate('/')
                }
            })
            .catch(err => console.error(err))
    }

    const handleAnswerChange = (position: number, value: boolean) => {
        const newAnswers = [...answers]
        newAnswers[position] = value
        setAnswers(newAnswers)
    }

    return (
        <form onSubmit={handleSubmitForm} className={`${styles['evaluation-form']}`}>
            <legend>Evaluación {questions.length < 10 ? 'del Tema' : 'de la Unidad'}</legend>
            {
                questions.map((question, index: number) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        <div>
                            {question.answers.map((answer: any, indexOfAnswer: number) => (
                                <div key={indexOfAnswer}>
                                    <input 
                                        type="radio" 
                                        name={`question${index+1}`} 
                                        onClick={() => handleAnswerChange(index, answer.correct)}/>
                                    <label htmlFor={answer.text}>{answer.text}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            }

            <button type="submit">Enviar</button>
        </form>
    )
}

export default EvaluationForm