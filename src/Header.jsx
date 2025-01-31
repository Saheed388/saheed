import React from 'react';
import './App.css'; // Assuming you have a CSS file for this component

function Header() {
  return (
    <div className="header-container" id='about'>
        <div className='image-container'>
            <img src="/nnnnnn.PNG" alt="logo" className="profile-image" />
        </div>
        <div className='about-me'>
            <h1>Jimoh <br/>Saheed Tunde</h1>
            <h2>Data and Analytics Engineer | Java Backend Engineer </h2>
            <h3>
            Experienced Data Engineer with expertise in advanced data engineering techniques,<br/> 
            Web3 development, and collaborative problem-solving.<br/>
             Rooted in economics and building innovative data and<br/>
              analytics platforms, I am passionate about creating impactful solutions in both the data and <br/>
              blockchain spaces.
            </h3>
        </div>
    </div>
  );
}

export default Header;
