import React, { useState } from 'react';
import './Navbar.css'; // Import the styling file
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome Icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo-removebg-preview.png" alt="logo" className="logo-image" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li className="nav-item">
          <a href="/" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
      </ul>

      {/* Navbar Actions */}
      <div className="navbar-actions">
        <a href="mailto:tunwaju@gmail.com">
          <button className="contact-btn">Contact</button>
        </a>
        <a href="https://drive.google.com/file/d/1VOu5cFR4PqXlXRudjzJmQHkCZvNfyLnK/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="resume-btn">Resume</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
