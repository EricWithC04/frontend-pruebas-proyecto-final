import React, { useState } from 'react'
import styles from './EvaluationForm.module.css'
import { useNavigate } from 'react-router-dom'

const EvaluationForm = ({ idEvaluation }: { idEvaluation: number }) => {

    const navigate = useNavigate()

    const [answers, setAnswers] = useState<Array<boolean>>([])

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        fetch('http://localhost:3001/evaluation', {
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
                    fetch(`http://localhost:3001/theme_progress/1/${idEvaluation}`, {
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

    const questions = [
        {
            "question": "¿Qué es la ciencia de datos?",
            "answers": [
                { "text": "El estudio de los sistemas informáticos y sus aplicaciones.", "correct": false },
                { "text": "El análisis y la interpretación de grandes volúmenes de datos para extraer información útil.", "correct": true },
                { "text": "La creación de hardware y software para dispositivos móviles.", "correct": false },
                { "text": "La optimización de algoritmos matemáticos para mejorar el rendimiento de aplicaciones web.", "correct": false }
            ]
        },
        {
            "question": "¿Cuál de las siguientes NO es una etapa típica en un proyecto de ciencia de datos?",
            "answers": [
                { "text": "Recolección de datos.", "correct": false },
                { "text": "Limpieza de datos.", "correct": false },
                { "text": "Desarrollo de hardware.", "correct": true },
                { "text": "Modelado de datos.", "correct": false }
            ]
        },
        {
            "question": "¿Qué herramienta es comúnmente utilizada en ciencia de datos para manipulación y análisis de datos?",
            "answers": [
                { "text": "Adobe Photoshop.", "correct": false },
                { "text": "Microsoft Word.", "correct": false },
                { "text": "Jupyter Notebook.", "correct": true },
                { "text": "AutoCAD.", "correct": false }
            ]
        },
        {
            "question": "¿Cuál es el propósito principal del análisis exploratorio de datos (EDA)?",
            "answers": [
                { "text": "Diseñar algoritmos de inteligencia artificial.", "correct": false },
                { "text": "Crear modelos de aprendizaje automático.", "correct": false },
                { "text": "Identificar patrones y anomalías en los datos.", "correct": true },
                { "text": "Desarrollar interfaces de usuario.", "correct": false }
            ]
        },
        {
            "question": "¿Qué término describe el proceso de usar algoritmos para predecir futuros eventos basándose en datos históricos?",
            "answers": [
                { "text": "Ingeniería de software.", "correct": false },
                { "text": "Análisis predictivo.", "correct": true },
                { "text": "Desarrollo web.", "correct": false },
                { "text": "Edición de video.", "correct": false }
            ]
        }
    ]

    return (
        <form onSubmit={handleSubmitForm} className={`${styles['evaluation-form']}`}>
            <legend>Evaluación del Tema</legend>
            {
                questions.map((question, index: number) => (
                    <div key={index}>
                        <p>{question.question}</p>
                        <div>
                            {question.answers.map((answer, indexOfAnswer: number) => (
                                <div key={indexOfAnswer}>
                                    <input type="radio" name={`question${index+1}`} onClick={() => handleAnswerChange(index, answer.correct)}/>
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