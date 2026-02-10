import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

export default Card
