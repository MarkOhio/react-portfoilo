
import React, { useEffect, useRef, useState } from "react";
import "../styles/skills.css";

interface Skill {
  name: string;
  percent: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML", percent: 54, color: "#E34C26", icon: "../images/logo.png" },
  { name: "CSS", percent: 90, color: "#264de4", icon: "../images/logo.png" },
  { name: "JavaScript", percent: 85, color: "#F0DB4F", icon: "../images/logo.png" },
  { name: "React", percent: 80, color: "#61DAFB", icon: "../images/logo.png" },
  { name: "TypeScript", percent: 75, color: "#3178C6", icon: "../images/logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "../images/logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "../images/logo.png" },
  { name: "HTML", percent: 54, color: "#E34C26", icon: "../images/logo.png" },
  { name: "CSS", percent: 90, color: "#264de4", icon: "../images/logo.png" },
  { name: "JavaScript", percent: 85, color: "#F0DB4F", icon: "../images/logo.png" },
  { name: "React", percent: 80, color: "#61DAFB", icon: "../images/logo.png" },
  { name: "TypeScript", percent: 75, color: "#3178C6", icon: "../images/logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "../images/logo.png" },
  { name: "Node.js", percent: 70, color: "#68A063", icon: "../images/logo.png" },
  
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
      <button className="skills-btn" onClick={() => window.location = './Projects'}>View My Projects</button>
    </section>
  );
};

export default Skills;