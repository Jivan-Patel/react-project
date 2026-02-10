import './App.css'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './components/Home'
import Food from './components/Food'
import ApiStore from './components/ApiStore'
import Movies from './components/Movies'
import Recipe from './components/Recipe'

function App() {

  return (
    <>

      <BrowserRouter>
        <nav>
          <ul>
            <Link to='/'><li>Home</li> </Link>
            <Link to='/food'><li>Food</li></Link>
            <Link to='/store'><li>Store</li></Link>
            <Link to='/movies'><li>Movies</li></Link>
            <Link to='/recipe'><li>Recipe</li></Link>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/food' element={<Food />}> </Route>
          <Route path='/store' element={<ApiStore />}> </Route>
          <Route path='/movies' element={<Movies />}> </Route>
          <Route path='/recipe' element={<Recipe />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
