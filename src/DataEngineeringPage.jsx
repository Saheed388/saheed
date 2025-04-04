import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import "./DataEngineeringPage.css"; // Add a CSS file for styling

function DataEngineeringPage() {
  return (
    <div className="data-engineering-page">
      <div className="icon-section">
        <h3 className="typewriter">Technologies:</h3> {/* Typing effect class */}

        <ul className="tech-icons">
          {/* Add icons for each technology */}
          <li className="icon-item">
            <img src="/python-logo.png" alt="Python" /> Python
          </li>
          <li className="icon-item">
            <img src="/java22.jpg" alt="Java" /> Java
          </li>
          <li className="icon-item">
            <img src="/spring boot.png" alt="SpringBoot" /> Spring Boot
          </li>
          <li className="icon-item">
            <img src="/docker-icon.png" alt="Docker" /> Docker
          </li>
          <li className="icon-item">
            <img src="/kafka-icon-icon-318x512-umxrvkv3.png" alt="Kafka" /> Kafka
          </li>
          <li className="icon-item">
            <img src="/airflow-icon-2048x2048-ptyvisqh.png" alt="Airflow" /> Airflow
          </li>
          <li className="icon-item">
            <img src="/googlecloud.png" alt="Google Cloud Platform" /> Google Cloud Platform
          </li>
          <li className="icon-item">
            <img src="/aws logo.png" alt="aws" /> AWS
          </li>
          <li className="icon-item">
            <img src="/Azure-Logo.png" alt="Azure" /> Azure
          </li>
          <li className="icon-item">
            <img src="/spark.png" alt="Apache Spark" /> Apache Spark
          </li>
          <li className="icon-item">
            <img src="/Rlogo.png" alt="R" /> R
          </li>
          <li className="icon-item">
            <img src="/beam-logo-full-color-nameless-500.png" alt="Apache Beam" /> Apache Beam
          </li>
          <li className="icon-item">
            <img src="/mage logo.PNG" alt="Mage" /> Mage
          </li>
          
          
          <li className="icon-item">
            <img src="/mongoDB.png" alt="MongoDB" /> MongoDB
          </li>
          <li className="icon-item">
            <img src="/mySQL.png" alt="MySQL" /> MySQL
          </li>
          
          <li className="icon-item">
            <img src="/excel-icon-17.png" alt="Excel" /> Excel
          </li>
          <li className="icon-item">
            <img src="/Microsoft-Power-Bi-Logo-Vector.svg-.png" alt="PowerBI" /> PowerBI
          </li>
          <li className="icon-item">
            <img src="/looker.png" alt="Looker" /> Looker
          </li>
          <li className="icon-item">
            <img src="/tableau-logo-png.png" alt="Tableau" /> Tableau
          </li>
          <li className="icon-item">
            <img src="/GitHub-1024.webp" alt="GitHub" /> Git
          </li>
          <li className="icon-item">
            <img src="/dbt.png" alt="Dbt" /> Dbt
          </li>
          <li className="icon-item">
            <img src="/terraform.png" alt="Terraform" /> Terraform
          </li>
          
          <li className="icon-item">
            <img src="/linux.jpeg" alt="Linux" /> Linux
          </li>
          <li className="icon-item">
            <img src="/rissing wave.png" alt="RisingWave" /> RisingWave
          </li>
        
          <li className="icon-item">
            <img src="/psql.png" alt="PostgresSQL" /> PSQL
          </li>
          <li className="icon-item">
            <img src="/postman.png" alt="Postman" /> Postman
          </li>

          <li className="icon-item">
            <img src="/flink.png" alt="ApacheFlinks" /> Apache Flinks
          </li>

          <li className="icon-item">
            <img src="/cassandra-pngrepo-com.png" alt="Cassandra" /> Cassandra
          </li>
          
          

        </ul>
      </div>
    </div>
  );
}

export default DataEngineeringPage;
