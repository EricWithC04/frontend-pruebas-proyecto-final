import pythonIcon from '../assets/python.png'
import csvIcon from '../assets/csv.png'
import algorithmIcon from '../assets/algorithm.png'
import mlIcon from '../assets/machine-learning.png'
import { UnitData } from '../types'

const exampleUnitsData: Array<UnitData> = [
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

export default exampleUnitsData