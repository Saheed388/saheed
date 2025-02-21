import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import './Services.css'; // Assuming you have a CSS file for styles

const Services = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="services-section" id='projects'>
      <h2 className="services-heading">Services <span className="dot">....</span></h2>
      <div className="services-container">
        {/* Data Engineering Card */}
        <div className="service-card">
          <div className="icon-container">
            <img src="/d11.PNG" alt="Data Engineering" className="service-icon" />
          </div>
          <h3>Data and Analytics Engineer</h3>
          <p>Streamlining and enhancing data from various sources while constructing scalable data pipelines, guaranteeing data integrity for valuable insights.</p>
          <button 
            className="navigate-button" 
            onClick={() => navigate('/data-engineering')}
          >
            View Projects
          </button> {/* Button to navigate to Data Engineering page */}
        </div>
       
        {/* Web3 Engineering Card */}
        <div className="service-card">
          <div className="icon-container">
            <img src="/web3icon.jpg" alt="Web3" className="service-icon" />
          </div>
          <h3>Java Backend Engineer</h3>
          <p>Designing and optimizing robust backend systems, ensuring high-performance APIs, scalable architectures, and seamless database integration for efficient application development.</p>

          <button 
            className="navigate-button" 
            onClick={() => navigate('/backend-engineering')}
          >
            View Projects
          </button> {/* Button to navigate to Web3 Engineering page */}
        </div>
      </div>
    </section>
  );
};

export default Services;
