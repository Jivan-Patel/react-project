import { useEffect, useState } from 'react'
function StopWatch() {
    let end = 5;
    const [time, setTime] = useState(0);
    const [isStart, setIsStart] = useState(false);
    
    useEffect(() => {
        let id = null;
        if(isStart) {
            id = setInterval(()=> {
                setTime((time) => time + 1);
            },1000);
        }
        else {
            console.log("End")
            clearInterval(id);
        }
    }, [isStart]);


    return (
        <section className='clockContainer'>
            <p>Completed Time: {time} </p>
            <button onClick={() => setIsStart(true)}>Play</button>
            <button onClick={() => setIsStart(false)}>Pause</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </section>
    )
}

export default StopWatch;
