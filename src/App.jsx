import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' bg-slate-900 overflow-hidden'>
   
      <Navbar />
      <Hero />
    
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App