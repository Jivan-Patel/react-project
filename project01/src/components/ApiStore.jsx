import { React, useEffect, useState } from 'react'
import './food.css'

function ApiStore() {

  let [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then((apidata) => {
        setData(data = apidata);
        console.log("Run sucessful");
      })
  }, [])

  if (!data) {
    return (
      <h1>Loading...</h1>
    )
  }
  return (
    <div className='apiCardContainer'>
      {
        data.map((item, i) => (
          <div className='apicard' key={i}>
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className='prop'>
              <p><b>Name:</b> {item.title}</p>
              <p><b>Price:</b> {item.price}</p>
              <p><b>Category:</b> {item.category}</p>
              <p><b>Instruction:</b> {item.description}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default ApiStore
