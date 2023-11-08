import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar'

import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
    <Footer />
    
    </>
  )
}

export default App