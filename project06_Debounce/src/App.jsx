import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [debounce, setDebounce] = useState("");
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounce(value)
    }, 1000);

    return () => clearTimeout(id);
  }, [value])

  return (
    <>
      <h1>Debouncing</h1>
      <input type="text" placeholder='Enter text here...' value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Text: {value}</p>
      <p>Debounce: {debounce}</p>
    </>
  )
}

export default App
