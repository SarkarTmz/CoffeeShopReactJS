import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-main section">
        <div className='footer'>
            <ul>
              <h3>Quick Link</h3>
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="about" className="footer-link">About</NavLink>
              <NavLink to="contact" className="footer-link">Contact</NavLink>
            </ul>
            <ul>
            <h3>Quick Link</h3>
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="about" className="footer-link">About</NavLink>
              <NavLink to="contact" className="footer-link">Contact</NavLink>
            </ul>
        </div>
        <hr />
        <div className="last">
          <p>All Copyright reserved</p>
          <p>Made by <a href="https://sonamtmg.vercel.app/" target='_blank'>Sonam Tamang</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer