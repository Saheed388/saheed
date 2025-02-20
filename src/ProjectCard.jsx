import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <small className="tools"><span>Tools:</span> {project.tools}</small>

        <div className="social-links">
          {/* Use the GitHub Icon */}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          )}

          {/* Use the LinkedIn Icon */}
          {project.linkedin && (
            <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
