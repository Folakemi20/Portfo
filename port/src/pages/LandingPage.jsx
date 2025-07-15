import React from 'react'
import NavBar from '../components/NavBar'
import HeaderBar from '../components/HeaderBar'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Tools from '../components/Tools'
import Links from '../components/Links'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
        <NavBar />
        <HeaderBar />
        <About />
        <Skills />
        <Services />
        <Tools />
        <Contact />
        <Links />
        <Footer />
    </div>
  )
}

export default LandingPage