import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import User from './components/Pages/User'
import { Form } from 'react-router-dom'

function App() {

  return (
    <>
    <nav>
      {/* <Link to={}></Link> */}
    </nav>
      <Routes>
        <Route path='/user' element={<User></User>} />
        <Route path='/' element={<p>Welcome to the Home Page</p>} />
      </Routes>
    </>
  )
}

export default App
