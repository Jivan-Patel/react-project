import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import UserCard from '../parts/UserCard'
import './user.css'
function User() {
  let [userData, setUserData] = useState(null)
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((resp) => resp.json())
      .then((data) => {
        setUserData(data.results);
      })
      .catch((error)=>{
        console.log(error)
      })
  }, [])
  if (!userData) {
    return (
      <div>
        <h1>User Data</h1>
        <p>Loading user Data...</p>
      </div>
    )
  }
  return (
    <div>
      <h1>User Data</h1>
      <div className="cardContainer">
        {userData.map((data,i) => (
          <UserCard props={data} key={i}/>
        ))}
      </div>
    </div>
  )
}

export default User
