import { useEffect,useState } from 'react'

function Counter1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const temp = Number(localStorage.getItem("count"));
    if (temp) setCount(temp);
  }, []);
  useEffect(() => {
    localStorage.setItem("count", count);
    // console.log("Saved")
  }, [count]);
  
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default Counter1
