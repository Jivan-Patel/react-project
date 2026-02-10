import React from 'react'
import './student.css'

function StudentCard(props) {
    console.log(props.data.name);
  return (
    
    <div className='card'>
      <p className="name">Name: {props.data.name}</p>
      <p className="name">Age: {props.data.age}</p>
      <p className="name">Course: {props.data.course}</p>
      <p className="name">City: {props.data.city}</p>
    </div>
  )
}

export default StudentCard
