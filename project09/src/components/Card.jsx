import React from 'react'

function Card(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.other}</p>
    </div>
  )
}

export default Card
