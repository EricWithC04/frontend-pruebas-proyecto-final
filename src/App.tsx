import './App.css'
import pythonIcon from './assets/python.png'
import UnitCard from './components/UnitCard/UnitCard'

function App() {
  return (
    <>
      <UnitCard 
        icon={pythonIcon}
        title="Introducción a Python"
        description='Esta unidad temática está diseñada para proporcionar a los estudiantes una comprensión fundamental del lenguaje de programación Python. A lo largo de la unidad, los estudiantes aprenderán los conceptos básicos de la programación, así como las características específicas y ventajas de Python como lenguaje'
      />
    </>
  )
}

export default App
