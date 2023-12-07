import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileNav.css';
import { VscThreeBars } from "react-icons/vsc";


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className= "mobile-nav">
      <Link to="/">
       <h2>Coffee</h2>
      </Link>
      
      <VscThreeBars className="bar"
        onClick={toggleMenu} />

      <div className= {isOpen ? "mobile-li" : "menu-li"}  id="mobile">
        <ul>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="Contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;