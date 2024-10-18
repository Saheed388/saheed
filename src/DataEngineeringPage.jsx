import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faAws, 
  faMicrosoft, 
  faGoogle, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCloud, 
  faChartBar, 
  faFileExcel, 
  faTerminal 
} from '@fortawesome/free-solid-svg-icons';
import './DataEngineeringPage.css';  // Add a CSS file for styling

function DataEngineeringPage() {
  return (
    <div className="data-engineering-page">
     

      <div className="icon-section">
        <h3 className="typewriter">Technologies:</h3> {/* Typing effect class */}

        <ul className="tech-icons">
          {/* Add icons for each technology */}
          <li className="icon-item"><FontAwesomeIcon icon={faPython} /> Python</li>
          <li className="icon-item"><FontAwesomeIcon icon={faTerminal} /> R</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Apache Beam</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Mage</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Airflow</li>
          <li className="icon-item"><FontAwesomeIcon icon={faGoogle} /> Google Cloud Platform</li>
          <li className="icon-item"><FontAwesomeIcon icon={faAws} /> AWS</li>
          <li className="icon-item"><FontAwesomeIcon icon={faMicrosoft} /> Azure</li>
          <li className="icon-item"><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
          <li className="icon-item"><FontAwesomeIcon icon={faDatabase} /> SQL</li>
          <li className="icon-item"><FontAwesomeIcon icon={faDatabase} /> NoSQL</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Kafka</li>
          <li className="icon-item"><FontAwesomeIcon icon={faFileExcel} /> Excel</li>
          <li className="icon-item"><FontAwesomeIcon icon={faChartBar} /> PowerBI</li>
          <li className="icon-item"><FontAwesomeIcon icon={faChartBar} /> Looker</li>
          <li className="icon-item"><FontAwesomeIcon icon={faChartBar} /> Tableau</li>
          <li className="icon-item"><FontAwesomeIcon icon={faGithub} /> Git</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Dbt</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Terraform</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> Apache Spark</li>
          <li className="icon-item"><FontAwesomeIcon icon={faTerminal} /> Linux</li>
          <li className="icon-item"><FontAwesomeIcon icon={faCloud} /> RisingWave</li>
        </ul>
      </div>
    </div>
  );
}

export default DataEngineeringPage;
