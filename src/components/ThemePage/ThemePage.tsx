import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allThemesPerUnit from '../../data/themesPerUnit'
import pythonIcon from '../../assets/python.png'
import './ThemePage.css'

const ThemePage = () => {

    const { idTheme } = useParams()

    const navigate = useNavigate()

    const [details, setDetails] = useState('')

    useEffect(() => {
        Object.keys(allThemesPerUnit).forEach((unit: any) => {
            allThemesPerUnit[unit].forEach((theme: any) => {
                if (theme.id == idTheme) setDetails(theme.title)
            })
        })
    }, [])

    const [exampleExercises, setExampleExercises] = useState([
        {
            id: 1,
            name: 'Tipos de Datos',
            extended: false,
            description: 'Aprende sobre los diferentes tipos de datos en Python, como enteros, flotantes, cadenas de texto y booleanos. Este ejercicio te ayudará a entender cómo trabajar con cada tipo de dato y cuándo utilizarlos en tus programas.'
        },
        {
            id: 2,
            name: 'Estructuras de Datos',
            extended: false,
            description: 'Explora las principales estructuras de datos en Python, incluyendo listas, tuplas, conjuntos y diccionarios. Aprende cómo almacenar, acceder y manipular colecciones de datos eficientemente.'
        },
        {
            id: 3,
            name: 'Variables',
            extended: false,
            description: 'Entiende el concepto de variables en Python y cómo se utilizan para almacenar datos. Este ejercicio te enseñará cómo declarar, asignar y modificar variables, así como las reglas de nomenclatura y el alcance de las mismas.'
        },
        {
            id: 4,
            name: 'Funciones',
            extended: false,
            description: 'Descubre cómo definir y utilizar funciones en Python. Aprende sobre parámetros, argumentos, valores de retorno y el concepto de alcance de variables dentro de las funciones. Este ejercicio te ayudará a estructurar tu código de manera más modular y reutilizable.'
        },
        {
            id: 5,
            name: 'Condicionales',
            extended: false,
            description: 'Aprende a tomar decisiones en tu código utilizando declaraciones condicionales como if, elif y else. Este ejercicio te enseñará a controlar el flujo de ejecución basándote en diferentes condiciones y a implementar lógica condicional compleja.'
        },
        {
            id: 7,
            name: 'Ciclos o Bucles',
            extended: false,
            description: 'Familiarízate con los bucles en Python, como for y while. Aprende cómo repetir bloques de código múltiples veces y cómo utilizar los bucles para iterar sobre secuencias de datos. Este ejercicio también cubre el uso de declaraciones de control como break y continue.'
        },
        {
            id: 8,
            name: 'Modulos',
            extended: false,
            description: 'Descubre cómo organizar y reutilizar tu código mediante módulos en Python. Aprende a importar módulos estándar y crear tus propios módulos, facilitando así la gestión y el mantenimiento de proyectos de programación más grandes.'
        },  
    ])

    const handleExtendExercise = (id: any) => {
        const newExampleExercises = exampleExercises.map((exercise) => {
            if (exercise.id == id) exercise.extended = !exercise.extended
            return exercise
        })
        setExampleExercises(newExampleExercises)
    }

    if (details.length) {
        return (
            <div className='details-container'>
                <div className='theme-container w-70'>
                    <button onClick={() => navigate(-1)}>Back</button>
                    <h1>{details}</h1>
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
                    <div className='theme-container'>
                    {
                        exampleExercises.map((exercise: any) => (
                                <div className='exercise-item-container'>
                                    <div className='theme-item expanded exercise w-100' onClick={() => handleExtendExercise(exercise.id)}>
                                        <p>{exercise.name}</p>
                                    </div>
                                    <div className={`theme-item-description w-100 ${exercise.extended ? 'yes-display' : 'no-display'}`}>
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