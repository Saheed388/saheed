import React from 'react';
import './Navbar.css'; // Import the styling file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo-removebg-preview.png" alt="logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li className="nav-item">
          <a href="#home" className="nav-link active">Home</a>
          <div className="underline"></div> {/* Optional underline for active link */}
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
      </ul>
      <div className="navbar-actions">

      <a href="mailto:tunwaju@gmail.com">
          <button  className="contact-btn" >Contact</button>
        </a>

        <a href="https://docs.google.com/document/d/1g989L1qg49kSsD9UH1L8r_4L4JEtlbmo/edit#heading=h.gjdgxs" target="_blank" rel="noopener noreferrer">
         <button className="rusume-btn">Resume </button>
         </a>
      </div>
    </nav>
  );
};

export default Navbar;
