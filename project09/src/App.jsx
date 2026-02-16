import { Route, Routes, Links, Link } from 'react-router-dom'
import './App.css'
import FoodUi from './components/FoodUi'
import Store from './components/StoreUi'
import UserUi from './components/UserUi'

function App() {

  return (
    <>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/food'>Food Api</Link>
          <Link to='/users'>User Api</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/food' element={<FoodUi />} />
        <Route path='/users' element={<UserUi />} />
      </Routes>
    </>
  )
}

export default App
