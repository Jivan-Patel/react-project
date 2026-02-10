import React, { useState } from 'react'
import Box from './Box'

function App() {
  let [bg, setBg] = useState("rgb(255, 255, 255)");
  function changeColor() {
    let r = Math.random()*256;
    let g = Math.random()*256;
    let b = Math.random()*256;

    setBg(`rgb(${r}, ${g}, ${b})`)
  }
  return (
    <div>
      <Box color={bg} />
      
      <button onClick={changeColor}>Click Me</button>
    </div>
  )
}

export default App
