import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Header from './components/Header'
import Na from './components/Na'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'

const App = () => {
  return (
    <>
      <div>
        {/* <Header/> */}
        <Na />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
      </Routes>
      {/* <Home />
      <About />
      <Services />
      <Contact /> */}
      <Footer />

    </>
  )
}

export default App
