"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "OptiStock",
    description: "A full-stack finance app using React and Django for real-time stock analysis via Alpaca API. Integrated an AI NLP trading bot powered by FinBERT for sentiment analysis. Deployed with CI/CD for automation and reliability.",
    image: "images/Bull.jpg",
    tag: ["All", "Software Engineering"],
    gitUrl: 'https://github.com/Nihilus888/OptiStock',
    previewUrl: 'https://github.com/Nihilus888/OptiStock',
  },
  {
    id: 2,
    title: "Software Engineering Job Portal",
    description: "Helps people find tech jobs by aggregating jobs from different job portals while keeping track which one they applied to",
    image: "images/Computer_Science.jpg",
    tag: ["All", "Software Engineering"],
    gitUrl: 'https://github.com/Nihilus888/Software-Engineer-Job-Portal-Backend',
    previewUrl: 'https://lunfy.github.io/Software-Engineer-Job-Portal-Frontend/',
  },
  {
    id: 3,
    title: 'Calendar App',
    description: "Helps keep track of meetings and other random items in your day",
    image: "images/Calendar.png",
    tag: ["All", "Software Engineering"],
    gitUrl: 'https://github.com/Nihilus888/Calendar-App',
    previewUrl: 'https://calendar-application.netlify.app/',
  },
  {
    id: 4,
    title: 'Medicine Recommendation System',
    description: "Comes up with a recommended medicine based on your symptoms",
    image: "images/recommendation-system.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://www.kaggle.com/code/nihilus888/medicine-recommendation-system/edit",
    previewUrl: 'https://www.kaggle.com/code/nihilus888/medicine-recommendation-system/edit',
  },
  {
    id: 5,
    title: "Meta Stock Price Predictor",
    description: "Data visualization of Meta stock price and predicts the price of Meta's stock based on historical price data",
    image: "images/stock_price.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://www.kaggle.com/code/nihilus888/meta-stock-price-prediction",
    previewUrl: "https://www.kaggle.com/code/nihilus888/meta-stock-price-prediction",
  },
  {
    id: 6,
    title: "Gold Price Prediction",
    description: "Data visualization of Gold price and predicts the price of gold with its historical price data",
    image: "images/gold-bars.jpg",
    tag: ["All", "Data Science"],
    gitUrl: "https://www.kaggle.com/code/nihilus888/gold-price-analysis-and-prediction",
    previewUrl: "https://www.kaggle.com/code/nihilus888/gold-price-analysis-and-prediction"
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Engineering"
          isSelected={tag === "Software Engineering"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;