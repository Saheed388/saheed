import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAws,   
} from '@fortawesome/free-brands-svg-icons';
import { 
  
} from '@fortawesome/free-solid-svg-icons';
import './DataEngineeringPage.css';  // Add a CSS file for styling

function DataEngineeringPage() {
  return (
    <div className="data-engineering-page">
     

      <div className="icon-section">
        <h3 className="typewriter">Technologies:</h3> {/* Typing effect class */}

        <ul className="tech-icons">
          {/* Add icons for each technology */}
          <li className="icon-item">  Python</li>
          <li className="icon-item"> R</li>
          <li className="icon-item"> Apache Beam</li>
          <li className="icon-item"> Mage</li>
          <li className="icon-item"> Airflow</li>
          <li className="icon-item"> Google Cloud Platform</li>
          <li className="icon-item"><FontAwesomeIcon icon={faAws} /> AWS</li>
          <li className="icon-item"> Azure</li>
          <li className="icon-item"> MongoDB</li>
          <li className="icon-item"> SQL</li>
          <li className="icon-item"> NoSQL</li>
          <li className="icon-item"> Kafka</li>
          <li className="icon-item"> Excel</li>
          <li className="icon-item"> PowerBI</li>
          <li className="icon-item"> Looker</li>
          <li className="icon-item"> Tableau</li>
          <li className="icon-item"> Git</li>
          <li className="icon-item">Dbt</li>
          <li className="icon-item"> Terraform</li>
          <li className="icon-item"> Apache Spark</li>
          <li className="icon-item"> Linux</li>
          <li className="icon-item"> RisingWave</li>
        </ul>
      </div>
    </div>
  );
}

export default DataEngineeringPage;
