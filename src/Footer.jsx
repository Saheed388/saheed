import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p> Copyright &copy; {currentYear} Jimoh Saheed Tunde. All rights reserved.</p>
        <ul className="footer-social-links">
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jimoh-saheed-5480b820b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Saheed388" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/user/Saeed_Jumuah/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faReddit} className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
