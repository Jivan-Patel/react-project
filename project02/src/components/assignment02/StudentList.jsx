import React from 'react'
import StudentCard from './StudenCard';
import './student.css'

function StudentList(props) {
    
  return (
    <div className='studentCardHolder'>
      {
        props.arr.map((data) => (           
          <StudentCard data={data}/>
        ))
      }
    </div>
  )
}

export default StudentList
