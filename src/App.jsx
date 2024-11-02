import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Mywork from './components/Mywork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Wrapper/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/mywork' element={<Mywork/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
