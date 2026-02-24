import './App.css'
import Users from './components/Users';
import Post from './components/Post';
import GetUserById from './components/GetUserById';
import Nav from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<GetUserById />} />
        <Route path='/api1' element={<Users />} />
        <Route path='/api2' element={<Post />} />
      </Routes>
    </>
  )
}

export default App
