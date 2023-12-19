import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="navbar container">
        <Link to="/">
          <h2>Mitho Coffee</h2>
        </Link>
          <div className="navbar-wrapper">
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="Contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar