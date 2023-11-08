import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='section footer'>
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
    </>
  )
}

export default Footer