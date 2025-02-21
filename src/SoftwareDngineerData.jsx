import React from "react";
import ProjectCard from "./ProjectCard";
import "./DataEngineeringData.css";

function SoftwareEngineerData() {
  const projects = [
    {
      title: "Ecommerce Backend Solution",
      description: "💡",
      github: "https://github.com/Saheed388/EcommerceFullStackProject",
      image: "/Ecommerce-Shopping-Infographics.png",
      tools: "Java, SQL, Spring Boot, Docker, H2 database, JWT, Lombok, Spring Security, Postman, Render."
    },
    {
      title: "Fitness Workout Tracker",
      description: "💡",
      github: "https://github.com/Saheed388/3rd_semester_capstone_project",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",
      image: "/fittnes.jpeg",
      tools: "Java, SQL, Spring Boot, Docker, H2 database, JWT, Lombok, Spring Security, Postman, Render."
    }
  ];

  return (
    <div className="app">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default SoftwareEngineerData;
