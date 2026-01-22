import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Sales from './pages/Sales'
import Contact from './pages/contact'
import Settings from './pages/Settings'
import Table from './pages/Table'




export default function App() {
  return (
    <BrowserRouter basename="/Restro">
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/table" element={<Table />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
