import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import TopMsg from './components/TopMsg'
import Aside from './components/Aside'
import MainSection from './components/MainSection'

function App() {

  return (
    <>
      <TopMsg />
      <Nav />

      <MainSection />

      <Aside />

      <Footer />

    </>
  )
}

export default App
