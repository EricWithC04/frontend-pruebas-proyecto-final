import { useEffect } from 'react'
import styles from './EvaluationPage.module.css'
import { useParams } from 'react-router-dom'
import EvaluationForm from '../EvaluationForm/EvaluationForm'

const EvaluationPage = () => {

    const { idEvaluation } = useParams()

    if (typeof idEvaluation !== 'string') {
        throw new Error('idEvaluation is required')
    }

    useEffect(() => {
        
    }, [])

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

    const unitQuestions = [
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
            "question": "¿Qué es Python?",
            "answers": [
                { "text": "Un lenguaje de programación de alto nivel y propósito general.", "correct": true },
                { "text": "Un sistema operativo.", "correct": false },
                { "text": "Un software de edición de video.", "correct": false },
                { "text": "Un lenguaje de marcado para diseño web.", "correct": false }
            ]
        },
        {
            "question": "¿Cuál es la sintaxis correcta para imprimir 'Hola, Mundo' en Python?",
            "answers": [
                { "text": "print('Hola, Mundo')", "correct": true },
                { "text": "echo 'Hola, Mundo'", "correct": false },
                { "text": "printf('Hola, Mundo')", "correct": false },
                { "text": "print 'Hola, Mundo'", "correct": false }
            ]
        },
        {
            "question": "¿Qué operador se utiliza para la concatenación de cadenas en Python?",
            "answers": [
                { "text": "+", "correct": true },
                { "text": "&", "correct": false },
                { "text": "*", "correct": false },
                { "text": "-", "correct": false }
            ]
        },
        {
            "question": "¿Cuál es la función principal del debugging en Python?",
            "answers": [
                { "text": "Optimizar el rendimiento del código.", "correct": false },
                { "text": "Encontrar y corregir errores en el código.", "correct": true },
                { "text": "Agregar nuevas funcionalidades al código.", "correct": false },
                { "text": "Mejorar la legibilidad del código.", "correct": false }
            ]
        },
        {
            "question": "¿Cuál de las siguientes opciones describe mejor un entorno virtual en Python?",
            "answers": [
                { "text": "Una versión de Python desarrollada para entornos de producción.", "correct": false },
                { "text": "Una copia aislada de la instalación de Python donde puedes instalar librerías específicas sin afectar otras instalaciones de Python.", "correct": true },
                { "text": "Un editor de texto avanzado para escribir código Python.", "correct": false },
                { "text": "Un marco de trabajo para el desarrollo de aplicaciones web.", "correct": false }
            ]
        },
        {
            "question": "¿Cuál es el propósito principal de usar librerías en Python?",
            "answers": [
                { "text": "Reducir el tiempo de ejecución del código.", "correct": false },
                { "text": "Facilitar el acceso a funciones y métodos predefinidos que resuelven problemas comunes.", "correct": true },
                { "text": "Mejorar la seguridad del código.", "correct": false },
                { "text": "Aumentar el tamaño del archivo del proyecto.", "correct": false }
            ]
        },
        {
            "question": "¿Qué es un algoritmo?",
            "answers": [
                { "text": "Una estructura de datos utilizada para almacenar información.", "correct": false },
                { "text": "Una secuencia de pasos bien definidos para resolver un problema.", "correct": true },
                { "text": "Un error de programación.", "correct": false },
                { "text": "Un tipo de variable en Python.", "correct": false }
            ]
        },
        {
            "question": "¿Qué permite hacer la librería NumPy en Python?",
            "answers": [
                { "text": "Crear interfaces gráficas de usuario.", "correct": false },
                { "text": "Realizar operaciones de álgebra lineal y trabajar con arreglos multidimensionales.", "correct": true },
                { "text": "Desarrollar aplicaciones web.", "correct": false },
                { "text": "Enviar correos electrónicos.", "correct": false }
            ]
        },
        {
            "question": "¿Qué función de NumPy se utiliza para crear un arreglo?",
            "answers": [
                { "text": "np.array()", "correct": true },
                { "text": "np.list()", "correct": false },
                { "text": "np.create()", "correct": false },
                { "text": "np.new_array()", "correct": false }
            ]
        }
    ]
    

    return (
        <div className={`${styles['evaluation-page']}`}>
            <EvaluationForm
                idEvaluation={parseInt(idEvaluation)}
                questions={parseInt(idEvaluation) > 30 ? unitQuestions : questions}
            />
        </div>
    )
}

export default EvaluationPage