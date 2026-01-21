import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Sales from './pages/Sales'
import Contact from './pages/contact'
import Settings from './pages/Settings'
import Table from './pages/Table'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/table' element={<Table />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
