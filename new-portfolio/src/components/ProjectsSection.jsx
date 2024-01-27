"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Webull",
    description: "Financial app that uses machine learning to predict the stock price for the next day while also keeping track of your portfolio with data visualisation",
    tag: ["All", "Software Engineering"],
    image: "",
    gitUrl: 'hello there',
    previewUrl: '/',
  },
  {
    id: 2,
    title: "Software Engineering Job Portal",
    description: "Helps people find tech jobs by aggregating jobs from different job portals while keeping track which one they applied to",
    image: "",
    tag: ["All", "Software Engineering"],
    gitUrl: 'hello there',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Calendar App',
    description: "Helps keep track of meetings and other random items in your day",
    image: "",
    tag: ["All", "Software Engineering"],
    gitUrl: 'hello there',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Medicine Recommendation System',
    description: "Comes up with a recommended medicine based on your symptoms",
    image: "",
    tag: ["All", "Data Science"],
    gitUrl: "hello there",
    previewUrl: '/',
  },
  {
    id: 5,
    title: "Meta Stock Price Predictor",
    description: "Predicts the price of Meta's stock based on historical price data",
    image: "",
    tag: ["All", "Data Science"],
    gitUrl: "hello there",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });
  return (
    <>
      <h2>My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Software Engineering" isSelected={tag === "Software Engineering"} />
        <ProjectTag onClick={handleTagChange} name="Data Science" isSelected={tag === "Data Science"} />
      </div>
      <div>
        {filteredProjects.map((project) => (
          project.id ? ( // Check if 'id' exists before rendering
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              image={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ) : (
            null // Render nothing if 'id' is undefined
          )
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;