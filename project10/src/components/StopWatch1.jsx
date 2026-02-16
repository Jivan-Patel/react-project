import { useState } from 'react'
function StopWatch() {
    let end = 5;
    const [time1, setTime1] = useState(0);
    const [time2, setTime2] = useState(end);
    const [playPause, setPlayPause] = useState("Play");
    const [id, setId] = useState(null);

    function play() {
        function timerStart() {
            setTime1((prev) => prev + 1);
            if (time2 <= 0 || time1 >= end) {
                console.log("End...");
                setPlayPause("Play");
                clearInterval(id);
                setId(null);
            }
            setTime2((prev) => prev - 1);
        }
        let temp = setInterval(timerStart, 1000);
        setId(temp);
    }
    function handlePlayPause() {
        if (playPause === "Play") {
            setPlayPause("Pause");
            play();
        }
        else {
            setPlayPause("Play");
            clearInterval(id);
            setId(null);
        }
    }
    function reset() {
        setPlayPause("Play");
        setTime1(0);
        setTime2(end);
        clearInterval(id);
        setId(null);
    }

    return (
        <section className='clockContainer'>
            <p>Completed Time: {time1} </p>
            <p>Remaining Time: {time2} </p>

            <button onClick={handlePlayPause}>{playPause}</button>
            <button onClick={reset}>Reset</button>
        </section>
    )
}

export default StopWatch;
