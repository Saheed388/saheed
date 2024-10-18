import React from "react";
import ProjectCard from "./ProjectCard";
import "./DataEngineeringData.css";

function DataEngineeringData() {
  const projects = [
    {
      title: "🚀 Cryptocurrency Data Pipeline!",
      description: " 💡 This project seamlessly blends real-time data pipelines with batch processing, opening doors to a wealth of insights in the world of cryptocurrency.",
      github: " https://github.com/Tunde338/zoomcamp ",  // GitHub repo link
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/animationCorrectGold.gif",
      tools: "Google Cloud, Kafka, Docker, Terraform, Mage.io, DBT , and Google Studio."
    },
    {
      title: "🚀 Youtube Data Pipeline",
      description: "💡 Aspired to extract valuable insights pertaining to optimal strategies for channel initiation, audience attraction, and subscriber acquisition on the YouTube platform.",
      github: "https://github.com/your-repo-healthhttps://github.com/Saheed388/3rd_semester_capstone_project ",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/youtubetifyProject.gif",
      tools: "Python, PostgreSql, Google Cloud, Docker, Airflow, DBT, and PowerBI"
    },
    {
      title: "🚀 World Bank Data Pipeline",
      description: "💡 My primary goal was to understand the GDP trends in African countries, with a particular focus on the states in West Africa from 2010 to 2022.",
      github: "https://github.com/Saheed388/Africa_dgp_project",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",
      image: "/gdp-place.png",
      tools: "Azure DataFactory, Gen2 Storage, Azure Databricks, Azure SQL Database, and PowerBI"
    },
    {
      title: "🚀 USA Eviction Data Pipeline",
      description: "💡  I demonstrate the use of Mage to extract data from an API, which is then stored in both PostgresSQL and MySQL databases. I opted for this dual database approach to provide a comprehensive overview in a single video.",
      github: "https://github.com/your-repo-healthhttps://github.com/Saheed388/3rd_semester_capstone_project ",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7136500225791115264/?originTrackingId=EfLfbp9BS6uAXLUvEps3Ew%3D%3D",
      image: "/mageToMysqAndPsql.png",
      tools: "Python, PostgreSql, Pgadmin, MySQL, PhpMyAdmin, Docker, and Mage"
    },

    {
      title: "🚀 Spotify Music Data Pipeline",
      description: "💡  I demonstrate the use of Mage to extract data from an API, which is then stored in both PostgresSQL and MySQL databases. I opted for this dual database approach to provide a comprehensive overview in a single video.",
      github: "https://github.com/your-repo-healthhttps://github.com/Saheed388/3rd_semester_capstone_project ",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7089249455111122946/?originTrackingId=Pkc8cADdSFO%2Ft7r1RcH1hg%3D%3D",
      image: "/apotifyProject.gif",
      tools: "Python, PostgreSql, Pgadmin, MySQL, PhpMyAdmin, Docker, and Mage"
    },
    {
      title: "🚀 Architectural Design of AWS Data Pipelines ",
      description: "💡  The AWS Data Pipeline Architecture Design project aims to create a scalable and efficient data pipeline using Amazon Web Services. It focuses on seamless data ingestion, transformation, and storage, leveraging services like AWS Glue, Amazon S3, and Amazon Redshift. The goal is to provide a robust framework that enhances data processing capabilities, enabling organizations to derive actionable insights and make informed decisions.",
      image: "/new-datapipeline.png",
      tools: "PostgreSql, Pgadmin, MySQL, PhpMyAdmin, Docker, and Mage"
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

export default DataEngineeringData;
