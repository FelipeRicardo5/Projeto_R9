import { useState } from 'react'
import './App.css'

import Login from './components/pages/Login.jsx'
import LandingPage from './components/pages/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LandingPage />
  )
}

export default App
