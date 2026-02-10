import React from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import StudentList from './components/assignment02/StudentList'
import './App.css'
import Counter from './components/assignment03/Counter'
import Api from './components/assignment04/Api'
import SocialMedia from './components/assignment05/SocialMedia'
import FakeStore from './components/assignment06/FakeStore'

function App() {
  const arr = [
    { name: "Jivan", age: 18, course: "CE", city: "bhuj" },
    { name: "Krishna", age: 19, course: "CSE", city: "Patan" },
    { name: "Kirish", age: 28, course: "Civil", city: "Mumbai" },
    { name: "Jon", age: 25, course: "Cemical", city: "Delhi" },
    { name: "Parv", age: 15, course: "Bio-cemical", city: "Gondal" },
  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/assignment02' element={<StudentList arr={arr} />}></Route>
          <Route path='/assignment03' element={<Counter />}></Route>
          <Route path='/assignment04' element={<Api />}></Route>
          <Route path='/assignment05' element={<SocialMedia />}></Route>
          <Route path='/assignment06' element={<FakeStore />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
