import './App.css'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemePage from './components/ThemePage/ThemePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/theme/:idTheme" element={<ThemePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
