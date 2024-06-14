import './App.css'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemePage from './components/ThemePage/ThemePage'
import MarkDownTest from './components/MarkDownTest/MarkDownTest'
import TextEditor from './components/TextEditorPage/TextEditorPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:idTheme" element={<ThemePage />} />
          <Route path='/markdown' element={<MarkDownTest />}/>
          <Route path='/editor/:idExercise' element={<TextEditor />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
