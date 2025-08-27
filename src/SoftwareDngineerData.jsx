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
    },
    {
      title: "Mediquest AI ",
      description: "💡 This project aims to empower Nigerians with AI-driven healthcare insights by leveraging public health facility data from health.gov.ng. The goal is to help citizens choose the right healthcare facility with confidence.",
      github: "https://github.com/Saheed388/mediquest_project_full_code/tree/main",
      fastApi: "https://documenter.getpostman.com/view/36540246/2sAYdZsYrk", // Replace with actual Postman link
      image: "/nigerian-doctor.jpg",
      tools: "Python, FastAPI, Groq, Docker, LLM, React js, RAG, Qdrant Vector Database"
    },
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
