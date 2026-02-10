import { useState } from 'react'

function Task03() {
    let [check, setCheck] = useState(false);
  return (
    <div>
      {
        (check) ? (<p>Data Loaded...</p>) : (<p>Error Occur</p>)
      }
      <button onClick={()=> setCheck((check) ? false : true)}>Click Me</button>
    </div>
  )
}

export default Task03
