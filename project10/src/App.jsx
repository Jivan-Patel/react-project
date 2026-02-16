import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StopWatch1 from './components/StopWatch1'
import StopWatch2 from './components/StopWatch2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StopWatch2 />
    </>
  )
}

export default App
