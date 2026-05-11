import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Mywork from './Mywork'
import Contact from './Contact'
import Footer from './Footer'

function Wrapper() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Mywork/>
      <Contact/>
    </div>
  )
}

export default Wrapper
