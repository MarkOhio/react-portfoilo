
import React from "react";
import "./about.css";

// Placeholder imports — we'll replace these once the actual components are ready
 import Profile from "../components/Profile";
 import SkillCard from "../components/SkillCard";
 // import ThemeToggle from "../components/ThemeToggle"; 
// import PhilosophySection from "../components/Philosophy/PhilosophySection";
// import ProcessSection from "../components/Process/ProcessSection";
import Testimonials from "../components/Testimonials";

const About: React.FC = () => {
  return (
    <section className="about-page">
     
    
   <div className="grid">
  <div className="box box-1 slide-down-fade"> <Profile /></div>
  <div className="box box-2"> <Testimonials /> </div>
  <div className="box box-3"> <SkillCard /> </div>
</div>

    </section>
  );
};

export default About;
