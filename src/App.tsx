import './App.css'
// import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemePage from './components/ThemePage/ThemePage'
import MarkDownTest from './components/MarkDownTest/MarkDownTest'
import TextEditor from './components/TextEditorPage/TextEditorPage'
import EvaluationPage from './components/EvaluationPage/EvaluationPage'
import ChatBotTest from './components/ChatBotTest/ChatBotTest'
import RetroTest from './components/TestRetro/TestRetro'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RetroTest />} />
          <Route path="/theme/:idTheme" element={<ThemePage />} />
          <Route path='/markdown/:idMarkdown' element={<MarkDownTest />}/>
          <Route path='/editor/:idExercise' element={<TextEditor />}/>
          <Route path='/evaluation/:idEvaluation' element={<EvaluationPage />}/>
          <Route path='/chatbot' element={<ChatBotTest />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
