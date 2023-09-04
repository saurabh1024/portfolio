import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  return (
    <div className='h-screen py-0 my-0'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
