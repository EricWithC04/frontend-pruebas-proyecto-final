import './App.css'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemePage from './components/ThemePage/ThemePage'
import MarkDownTest from './components/MarkDownTest/MarkDownTest'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:idTheme" element={<ThemePage />} />
          <Route path='/markdown' element={<MarkDownTest></MarkDownTest>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
