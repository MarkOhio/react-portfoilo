import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle"; 
import "./projects.css";


interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  languages: string[];
  year: string;
}

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "My personal portfolio built with React and TypeScript.",
    image: "tall.jpg",
    link: "https://myportfolio.com",
    languages: ["React", "TypeScript", "CSS"],
    year: "2025",
  },
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  },
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  },
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  }
  ,
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  }
  ,
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  }
  ,
  {
    name: "E-Commerce Store",
    description: "A modern tech store built with HTML, CSS, and JS.",
    image: "flat.jpg",
    link: "https://storeexample.com",
    languages: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    name: "Node API Server",
    description: "A RESTful API built with Node.js and Express.",
    image: "tall.jpg",
    link: "https://apiserver.com",
    languages: ["Node", "JavaScript"],
    year: "2023",
  },
];

const allLanguages = ["All", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node","", "john"];

const Projects: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState("All");

  const filteredProjects =
    selectedLang === "All"
      ? projects
      : projects.filter((p) => p.languages.includes(selectedLang));

  return (
    <div className="projects-page">
      {/* Language Filter Buttons */}
      <div className="language-filter">
        {allLanguages.map((lang) => (
          <button
            key={lang}
            className={`lang-btn ${selectedLang === lang ? "active" : ""}`}
            onClick={() => setSelectedLang(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((proj, i) => (
          <div className="project-card2" key={i}>
            <div className="image-wrapper">
              <img src={proj.image} alt={proj.name} />
              <div className="overlay">
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
              </div>
            </div>
            <div className="card-info">
              <h3>{proj.name}</h3>
              <p>{proj.languages.join(", ")}</p>
              <span>{proj.year}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <ThemeToggle/> */}
    </div>
  );
};

export default Projects;
