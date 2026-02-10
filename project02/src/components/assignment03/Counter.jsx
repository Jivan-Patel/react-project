import React, { useState } from 'react'
import './count.css'

function Counter() {
    const [count, setCount] = useState(0);
    function incCount() {
        setCount(count + 1);
    }
    function decCount() {
        if(count <= 0) return
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }
    return (
        <div className='counterContainer'>
            <div className='counterHolder'>
                <h1 className="count">{count}</h1>
                <div className="btns">
                    <button className='inc countBtn' onClick={incCount} >+</button>
                    <button className='dec countBtn' onClick={decCount}>-</button>
                    <button className='res countBtn' onClick={reset}>↻</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
