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
            Experienced Data and Analytics Engineer and Java Backend Developer with <br/>expertise 
            in building scalable backend systems and efficient data pipelines.<br/> 
            Skilled in advanced data engineering techniques, backend architecture,<br/>
            and collaborative problem-solving.<br/>
            With a strong foundation in economics, I specialize in developing<br/> high-performance APIs,
            optimizing databases, <br/>and creating data-driven solutions for modern applications.



            </h3>
        </div>
    </div>
  );
}

export default Header;
