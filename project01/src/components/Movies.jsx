import { React, useEffect, useState } from 'react'
import './food.css'

function Movies() {

  let [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles?rapidapi-key=6014102147mshacd8c6845b5995ep1454abjsnbfa4122dd9d8')
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
              <img src={item.primaryImage} alt={item.title} />
            </div>
            <div className='prop'>
              <p><b>Name:</b> {item.primaryTitle}</p>
              <p><b>Release Date:</b> {item.releaseDate}</p>
              <p><b>Type:</b> {item.type}</p>
              <p><b>Description:</b> {item.description}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Movies
