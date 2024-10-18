import React from "react";
import ProjectCard from "./ProjectCard";
import "./DataEngineeringData.css";

function DataEngineeringData() {
  const projects = [
    {
      title: "🚀 Cryptocurrency Data Pipeline!",
      description: " 💡 This project seamlessly blends real-time data pipelines with batch processing, opening doors to a wealth of insights in the world of cryptocurrency.",
      github: "https://lnkd.in/dap_PsKn",  // GitHub repo link
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/animationCorrectGold.gif",
      tools: "Google Cloud, Kafka, Docker, Terraform, Mage.io, DBT , and Google Studio."
    },
    {
      title: "🚀 Youtube Data Pipeline",
      description: "💡 Aspired to extract valuable insights pertaining to optimal strategies for channel initiation, audience attraction, and subscriber acquisition on the YouTube platform.",
      github: "https://github.com/your-repo-healthhttps://github.com/Saheed388/3rd_semester_capstone_project ",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/capstoneproject.png",
      tools: "Python, PostgreSql, Google Cloud, Docker, Airflow, DBT, and PowerBI"
    },
    {
      title: "🚀 World Bank Data Pipeline",
      description: "💡 My primary goal was to understand the GDP trends in African countries, with a particular focus on the states in West Africa from 2010 to 2022.",
      github: "https://github.com/Saheed388/Africa_dgp_project",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",
      image: "/WorldBankDataPipline.png",
      tools: "Python, Azure, and PowerBI"
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

export default DataEngineeringData;
