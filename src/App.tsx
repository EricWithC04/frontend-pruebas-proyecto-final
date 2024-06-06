import { useState } from 'react'
import './App.css'
import pythonIcon from './assets/python.png'
import csvIcon from './assets/csv.png'
import algorithmIcon from './assets/algorithm.png'
import mlIcon from './assets/machine-learning.png'
import UnitCard from './components/UnitCard/UnitCard'

type UnitData = {
  icon: string
  title: string
  description: string,
  name: string
}

const exampleData: Array<UnitData> = [
  {
    icon: pythonIcon,
    title: 'Introducción a Python',
    description: 'Esta unidad temática está diseñada para proporcionar a los estudiantes una comprensión fundamental del lenguaje de programación Python. A lo largo de la unidad, los estudiantes aprenderán los conceptos básicos de la programación, así como las características específicas y ventajas de Python como lenguaje',
    name: 'python'
  },
  {
    icon: csvIcon,
    title: 'Manejo de datos externos',
    description: 'Esta unidad temática está diseñada para proporcionar a los estudiantes las habilidades y conocimientos necesarios para trabajar con datos provenientes de fuentes externas. A lo largo de esta unidad, los estudiantes aprenderán a importar, limpiar, transformar y analizar datos, así como a entender su contexto y relevancia.',
    name: 'csv'
  },
  {
    icon: algorithmIcon,
    title: 'Optimización algorítmica',
    description: 'Esta unidad temática se centra en proporcionar a los estudiantes una comprensión profunda de las técnicas y principios utilizados para optimizar algoritmos y mejorar su eficiencia. A lo largo de la unidad, los estudiantes aprenderán a analizar, diseñar y optimizar algoritmos para resolver problemas de manera más efectiva.',
    name: 'algorithm'
  },
  {
    icon: mlIcon,
    title: 'Aprendizaje automático',
    description: 'Esta unidad temática está diseñada para proporcionar a los estudiantes una comprensión básica de los conceptos y técnicas fundamentales del aprendizaje automático (machine learning). A lo largo de esta unidad, los estudiantes aprenderán los principios que sustentan el aprendizaje automático, así como sus aplicaciones prácticas en diferentes áreas.',
    name: 'ml'
  },
]

const allThemesPerUnit: any = {
  "python": [
    "¿Qué es la ciencia de datos?",
    "¿Qué es Python?",
    "Sintaxis, semántica y reglas de Python.",
    "Debugging en Python.",
    "Entornos virtuales y librerías de python.",
    "Desarrollo de pensamiento algorítmico mediante actividades prácticas",
    "Introducción a la librería NumPy de Python.",
  ],
  "csv": [
    "Limpieza y estructura de los datos.",
    "Obtención de datos a partir de archivos CSV.",
    "Obtención de datos a partir de bases de datos SQL.",
    "Introducción a Pandas para ciencia de datos.",
    "Introducción a Matplotlib para gráficos estadísticos.",
  ],
  "algorithm": [
    "¿Qué es “Optimizar” un algoritmo?",
    "¿Qué es la complejidad algorítmica?",
    "Algoritmos más utilizados.",
    "Introducción al análisis algorítmico.",
    "Introducción a la notación asintótica.",
    "Iteración de soluciones aplicando pensamiento algorítmico optimizado.",
  ],
  "ml": [
    "Fundamentales del Aprendizaje Automático.",
    "Preprocesamiento de Datos para Aprendizaje Automático.",
    "Modelos Básicos de Aprendizaje Automático.",
    "Evaluación de Modelos de Aprendizaje Automático",
    "Aplicaciones Prácticas del Aprendizaje Automático",
    "Herramientas y Librerías de Aprendizaje Automático en Python",
  ]
}

function App() {

  const [expandedThemes, setExpandedThemes] = useState(false)
  const [unit, setUnit] = useState('python')

  return (
    <>
      <div className="unit-card-container">
        {
          exampleData.map((data, index) => (
            <UnitCard 
              key={index} 
              icon={data.icon}
              title={data.title}
              description={data.description}
              name={data.name}
              setUnit={setUnit}
              setExpandedThemes={setExpandedThemes}
            />
          ))
        }
      </div>
      <div className='theme-container'>
        {
          allThemesPerUnit.hasOwnProperty(unit) ? allThemesPerUnit[unit].map((data: string) => (
            <div className={`theme-item ${expandedThemes ? 'expanded' : ''}`}>
              <p>{data}</p>
            </div>
          )) : null
        }
      </div>
    </>
  )
}

export default App
