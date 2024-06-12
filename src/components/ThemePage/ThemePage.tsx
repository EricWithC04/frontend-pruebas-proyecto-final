import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allThemesPerUnit from '../../data/themesPerUnit'
import pythonIcon from '../../assets/python.png'
import exampleExercises from '../../data/exampleExercises'
import './ThemePage.css'
import { ExerciseItem } from '../../data/types'

const ThemePage = () => {

    const { idTheme } = useParams()

    const navigate = useNavigate()

    const [themeTitle, setThemeTitle] = useState('')
    const [themeExercises, setThemeExercises] = useState<Array<ExerciseItem>>([])

    useEffect(() => {
        Object.keys(allThemesPerUnit).forEach((unit: any) => {
            allThemesPerUnit[unit].forEach((theme: any) => {
                if (theme.id == idTheme) setThemeTitle(theme.title)
            })
        })
    }, [])

    useEffect(() => {
        const exercisesItems: Array<ExerciseItem> = exampleExercises.map((exercise) => {
            return {
                ...exercise,
                extended: false
            }
        })

        setThemeExercises(exercisesItems)
    }, [])

    const handleExtendExercise = (id: number) => {
        const newExampleExercises = themeExercises.map((exercise) => {
            if (exercise.id == id) exercise.extended = !exercise.extended
            return exercise
        })
        setThemeExercises(newExampleExercises)
    }

    if (themeTitle.length) {
        return (
            <div className='details-container'>
                <div className='theme-container w-70'>
                    <button onClick={() => navigate(-1)}>Back</button>
                    <h1>{themeTitle}</h1>
                    <p className='theme-description w-80'>
                        Python es un lenguaje de programación potente y fácil de aprender. Tiene estructuras de datos de alto nivel eficientes y un simple pero efectivo sistema de programación orientado a objetos. La elegante sintaxis de Python y su tipado dinámico, junto a su naturaleza interpretada lo convierten en un lenguaje ideal para scripting y desarrollo rápido de aplicaciones en muchas áreas, para la mayoría de plataformas
                    </p>
                    <p className='theme-description w-80'>
                        En esta unidad se desarrollarán los conceptos básicos y las funcionalidades del lenguaje de programación Python y su sistema. Ayuda a tener un interprete de Python accesible para una experiencia práctica, todos los ejemplos son auto-contenidos, permitiendo utilizar el tutorial sin conexión.
                    </p>
                    <p className='theme-description w-80'>
                        Para poder empezar con python, es necesario instalarlo. Puede descargarlo desde la pagina oficial de python: <a href="https://www.python.org/downloads" target="_blank">https://www.python.org/downloads</a>
                    </p>
                    <p className='theme-description w-80'>
                        Para la instalación, siga los siguientes pasos:
                        <ul>
                            <li>1 - Lorem ipsum dolor sit amet.</li>
                            <li>2 - Lorem ipsum dolor sit amet.</li>
                            <li>3 - Lorem ipsum dolor sit amet.</li>
                            <li>4 - Lorem ipsum dolor sit amet.</li>
                            <li>5 - Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </p>
                    <div className='item-button-container'>
                    {
                        themeExercises.map((exercise: ExerciseItem) => (
                                <div className='exercise-item-container'>
                                    <div className='item-button item-button-outline exercise w-100' onClick={() => handleExtendExercise(exercise.id)}>
                                        <p>{exercise.name}</p>
                                    </div>
                                    <div className={`exercise-description w-100 ${exercise.extended ? 'yes-display' : 'no-display'}`}>
                                        <p>{exercise.description}</p>
                                        <button>Ir al Ejercicio</button>
                                    </div>
                                </div>
                            ))    
                        }
                    </div>
                </div>
                <div className='details-sidebar w-20'>
                    <div className='theme-icon w-100'>
                        <img src={pythonIcon} alt="icon" />
                    </div>
                    <div className='details-sidebar-content'>
                        <p>Duración estimada de la clase</p>
                        <p>Nivel Básico</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Cargando...</div>
        )
    }
}

export default ThemePage