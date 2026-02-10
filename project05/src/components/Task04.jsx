import  { useState } from 'react'
import Task04Button from './Task04Button'

function Task04() {
    let [colour, setColor] = useState('rgb(253 ,0, 0)')
    let [bgColour, setBgColor] = useState('rgb(64, 64, 64)')
    function changeBG(){
        let r1 = Math.floor(Math.random()*256);
        let r2 = Math.floor(Math.random()*256);
        let r3 = Math.floor(Math.random()*256);
        setColor(`rgb(${r1}, ${r2}, ${r3})`);
        setBgColor(`rgb(${r2} ,${r3}, ${r1})`);
    }
  return (
    <div>
      <p style={{'color':colour, 'backgroundColor':bgColour}}>Hello World!!!</p>
      <p style={{'color':colour, 'backgroundColor':bgColour}}>This is task 4</p>
      <Task04Button fun={changeBG}/>
    </div>
  )
}

export default Task04
