import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2>Mitho Coffee</h2>
        <div className="navbar-wrapper">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="Contact">Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar