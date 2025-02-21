import React from "react";
import ProjectCard from "./ProjectCard";
import "./DataEngineeringData.css";
import { FaExternalLinkAlt } from "react-icons/fa"; // Importing external link icon

function SoftwareEngineerData() {
  const projects = [
    {
      title: "Ecommerce Backend Solution",
      description: "💡 A backend solution for an eCommerce platform, implementing secure authentication, product management, and order tracking.",
      github: "https://github.com/Saheed388/EcommerceFullStackProject",
      postman: "https://documenter.getpostman.com/view/36540246/2sAYX2NPfm", // Replace with actual Postman link
      image: "/Ecommerce-Shopping-Infographics.png",
      tools: "Java, SQL, Spring Boot, Docker, H2 database, JWT, Lombok, Spring Security, Postman, Render."
    },
    {
      title: "Fitness Workout Tracker",
      description: "💡 The Fitness Workout Tracker backend allows users to create, manage, and track personalized workout routines. It supports user authentication, workout scheduling, progress tracking, and custom exercise notes.",
      github: "https://github.com/Saheed388/3rd_semester_capstone_project",
      postman: "https://documenter.getpostman.com/view/36540246/2sAYdZsYrk", // Replace with actual Postman link
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
