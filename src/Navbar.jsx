import React, { useState } from 'react';
import './Navbar.css'; // Import the styling file
import { Menu, X } from '@mui/icons-material'; // MUI icons for hamburger menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo-removebg-preview.png" alt="logo" className="logo-image" />
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links">
        <li className="nav-item">
          <a href="/" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a href="mailto:tunwaju@gmail.com" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="https://drive.google.com/file/d/1VOu5cFR4PqXlXRudjzJmQHkCZvNfyLnK/view?usp=drive_link" 
             target="_blank" 
             rel="noopener noreferrer"
             className="nav-link">
             Resume
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        {menuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" className="mobile-link">Home</a>
        <a href="mailto:tunwaju@gmail.com" className="mobile-link">Contact</a>
        <a href="https://drive.google.com/file/d/1VOu5cFR4PqXlXRudjzJmQHkCZvNfyLnK/view?usp=drive_link" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="mobile-link">
           Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
