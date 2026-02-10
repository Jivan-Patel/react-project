import { React, useEffect, useState } from 'react'
import './food.css'

function Food() {

  let [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=h')
      .then((resp) => resp.json())
      .then((apidata) => {
        setData(data = apidata.meals);
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
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <div className='prop'>
              <p><b>Name:</b> {item.strMeal}</p>
              <p><b>Category:</b> {item.strCategory}</p>
              <p><b>Area:</b> {item.strArea}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Food
