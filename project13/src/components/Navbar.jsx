import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/api1'>API1</Link>
      <Link to='/api2'>API2</Link>
    </nav>
  )
}

export default Navbar
