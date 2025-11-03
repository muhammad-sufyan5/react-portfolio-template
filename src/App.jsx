import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import MyProjects from './components/MyProjects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <MyProjects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App