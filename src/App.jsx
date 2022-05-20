import React from 'react'
import "./index.css"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Protfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Countact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Protfolio />
      <Testimonials />
      <Countact />
      <Footer />
    </>
  )
}

export default App