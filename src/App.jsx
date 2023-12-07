import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer';
import MobileNav from './component/MobileNav';

const App = () => {
  return (
    <>
      <div className="app container">
        <Navbar />
        <MobileNav/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
            </Routes>
      </div>
    <Footer />
    </>
  )
}

export default App