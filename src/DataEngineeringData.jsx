import React from "react";
import ProjectCard from "./ProjectCard";
import "./DataEngineeringData.css";

function DataEngineeringData() {
  const projects = [
    {
      title: "Cryptocurrency Data Pipeline!",
      description: " 💡 This project seamlessly blends real-time data pipelines with batch processing, opening doors to a wealth of insights in the world of cryptocurrency.",
      github: " https://github.com/Tunde338/zoomcamp/tree/zoomcamp",  // GitHub repo link
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/animationCorrectGold.gif",
      tools: "Google Cloud, Kafka, Docker, Terraform, Mage.io, DBT , and Google Studio."
    },
    {
      title: "Youtube Data Pipeline",
      description: "💡 Aspired to extract valuable insights pertaining to optimal strategies for channel initiation, audience attraction, and subscriber acquisition on the YouTube platform.",
      github: "https://github.com/Saheed388/capstone_submit",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",  // LinkedIn profile
      image: "/youtubetifyProject.gif",
      tools: "Python, PostgreSql, Google Cloud, Docker, Airflow, DBT, and PowerBI."
    },
    {
      title: "World Bank Data Pipeline",
      description: "💡 My primary goal was to understand the GDP trends in African countries, with a particular focus on the states in West Africa from 2010 to 2022.",
      github: "https://github.com/Saheed388/Africa_dgp_project",
      linkedin: "https://www.linkedin.com/in/jimoh-saheed-5480b820b/recent-activity/images/",
      image: "/gdp-place.png",
      tools: "Azure DataFactory, Gen2 Storage, Azure Databricks, Azure SQL Database, and PowerBI."
    },
    {
      title: "USA Eviction Data Pipeline",
      description: "💡  I demonstrate the use of Mage to extract data from an API, which is then stored in both PostgresSQL and MySQL databases. I opted for this dual database approach to provide a comprehensive overview in a single video.",
      github: "https://github.com/Saheed388/youtube-video-project",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7136500225791115264/?originTrackingId=EfLfbp9BS6uAXLUvEps3Ew%3D%3D",
      image: "/mageToMysqAndPsql.png",
      tools: "Python, PostgreSql, Pgadmin, MySQL, PhpMyAdmin, Docker, and Mage."
    },

    {
      title: "Spotify Music Data Pipeline",
      description: "💡  I demonstrate the use of Mage to extract data from an API, which is then stored in both PostgresSQL and MySQL databases. I opted for this dual database approach to provide a comprehensive overview in a single video.",
      github: "https://github.com/Saheed388/Spotfy_Kafka_live_streaming_project ",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7089249455111122946/?originTrackingId=Pkc8cADdSFO%2Ft7r1RcH1hg%3D%3D",
      image: "/apotifyProject.gif",
      tools: "Python, PostgreSql, Pgadmin, MySQL, PhpMyAdmin, Docker, and Mage."
    },
    {
      title: "VendEase Real-Time StreamingData Pipeline",
      description: "💡 The Real-Time Data Pipeline project is a robust and sophisticated system designed to extract, transform, validate, analyze, and store data from multiple sources. The pipeline ensures that other data teams have real-time access to clean and structured data for analysis, predictions, and model development ",
      image: "/VendeaseDataPipeline.gif",
      tools: "Kafka, Bigquery, Jupyter, Looker, and Docker.",
      github: "https://github.com/Saheed388/VendEaseInterviewProject/tree/main ",

    },
    {
      "title": "Bank Transaction Real-Time Streaming and Batch Data Pipeline",
      "description": "💡 This Real-Time and Batch Data Pipeline is a powerful system designed for efficient extraction, transformation, validation, analysis, and storage of data from multiple sources. It ensures that data teams have seamless real-time access to clean, structured data for analytics, predictive modeling, and decision-making.",
      "image": "/transactional_architecture.gif",
      "tools": "Kafka, Apache Flink, PostgreSQL, Cassandra, Spark, Airflow, Python, Power BI, and Docker.",
      "github": "https://github.com/Saheed388/Transactions-end-to-end-project/tree/main"
    },
    
    {
        title: "Mediquest AI ",
        description: "💡 This project aims to empower Nigerians with AI-driven healthcare insights by leveraging public health facility data from health.gov.ng. The goal is to help citizens choose the right healthcare facility with confidence.",
        github: "https://github.com/Saheed388/mediquest_project_full_code/tree/main",
        postman: "https://saheedmediquest.vercel.app/", // Replace with actual Postman link
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

export default DataEngineeringData;
