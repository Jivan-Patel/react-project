import React from 'react'
import './api.css'
function ApiCard(user) {
  return (
    <div className='apiCard'>
      <p className="name">Name: {user.details.name}</p>
      <p className="mail">E-mail: {user.details.email}</p>
      <p className="city">City: {user.details.address.city}</p>
    </div>
  )
}

export default ApiCard
