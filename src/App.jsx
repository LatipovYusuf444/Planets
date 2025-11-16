import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PlanetPage from './page/PlanetPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<PlanetPage />} />
      </Routes>
    </>
  )
}

export default App
