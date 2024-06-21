import { useState, useEffect } from 'react'
import { Exercise, ExerciseItem } from '../../data/types'
import { useNavigate } from 'react-router-dom'

const ExerciseList = ({ idMarkdown }: { idMarkdown: number }) => {

    const navigate = useNavigate()
    const [exercises, setExercises] = useState<Array<ExerciseItem>>([])

    useEffect(() => {
        fetch(`http://localhost:3001/theme/${idMarkdown}`)
            .then(res => res.json())
            .then(data => {
                const newExampleExercises = data.exercises.map((exercise: Exercise) => {
                    return {
                        ...exercise,
                        extended: false
                    }
                })
                setExercises(newExampleExercises)
            })
            .catch(err => console.error(err))
    }, [])

    const handleExtendExercise = (id: number) => {
        const newExampleExercises = exercises.map((exercise: ExerciseItem) => {
            if (exercise.id == id) exercise.extended = !exercise.extended
            else exercise.extended = false
            return exercise
        })
        setExercises(newExampleExercises)
    }

    return (
        <div className='item-button-container'>
            {
                exercises.map((exercise: ExerciseItem) => (
                    <div className='exercise-item-container'>
                        <div className='item-button item-button-outline exercise w-100' onClick={() => handleExtendExercise(exercise.id)}>
                            <p>{exercise.name}</p>
                        </div>
                        <div className={`exercise-description w-100 ${exercise.extended ? 'yes-display' : 'no-display'}`}>
                            <p>{exercise.description}</p>
                            <button onClick={() => navigate(`/editor/${exercise.id}`)}>Ir al Ejercicio</button>
                        </div>
                    </div>
                ))    
            }
        </div>
    )
}

export default ExerciseList