
import React, { useEffect, useRef, useState } from "react";
import "../styles/skills.css";
 import { Link, useNavigate } from "react-router-dom";

interface Skill {
  name: string;
  percent: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML", percent: 54, color: "#E34C26", icon: "logo.png" },
  { name: "CSS", percent: 90, color: "#264de4", icon: "logo.png" },
  { name: "JavaScript", percent: 85, color: "#F0DB4F", icon: "logo.png" },
  { name: "React", percent: 80, color: "#61DAFB", icon: "logo.png" },
  { name: "TypeScript", percent: 75, color: "#3178C6", icon: "logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "logo.png" },
  { name: "HTML", percent: 54, color: "#E34C26", icon: "logo.png" },
  { name: "CSS", percent: 90, color: "#264de4", icon: "logo.png" },
  { name: "JavaScript", percent: 85, color: "#F0DB4F", icon: "logo.png" },
  { name: "React", percent: 80, color: "#61DAFB", icon: "logo.png" },
  { name: "TypeScript", percent: 75, color: "#3178C6", icon: "logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "logo.png" },
  
];

const Skills: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <h2 className="skills-header">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-info">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />

            <div className="skill-center">

            <span className="skill-name">{skill.name}</span>

            <div className="progress-bar">
            <div
              className={`progress-fill ${visible ? "animate" : ""}`}
              style={{
                backgroundColor: skill.color,
                width: visible ? `${skill.percent}%` : "0%",
              }}
            ></div>
            </div>

            </div>

              <span className="skill-percent">{skill.percent}%</span>
            </div>
           
          </div>
        ))}
      </div>
      <p className="skills-footer">
        I’m always learning and improving my skill set to stay up-to-date with
        new technologies.
      </p>
      <Link to="/projects" className="skills-btn">
        View My Projects
      </Link>
      </section>
  );
};

export default Skills;