import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation  } from "react-router-dom"; // ✅ add this


//import Navbar from "../components/Navbar";
//import Stats from "../components/Stats";
import Hero from "../components/Hero";
//import PriceQuestion from "../components/PriceQuestion"; 

import Projects from "../components/Projects";
//import Contact from "../components/Contactcom";
//import Footer from "../components/Footer";
//import ThemeToggle from "../components/ThemeToggle"; 
import "./home.css";
import "../styles/projects.css";
//import ProjectCard from "../components/ProjectCard";

function Home() {
  const location = useLocation();

  // 🪄 Add this small effect ABOVE your fade animations and returns
  useEffect(() => {
    if (location.state?.scrollTarget) {
      const section = document.getElementById(location.state.scrollTarget);
      section?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title);
    }
  }, [location]);


  const [fadeClass, setFadeClass] = useState("fade-enter");

  useEffect(() => {
    const timer = setTimeout(() => setFadeClass("fade-enter-active"), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="landing-page">
 <div className={`home ${fadeClass}`}>
          

          <Hero />  
          <section id="projects">
            <Projects />
          </section>
        
          {/* <section id="contact">
            <Contact />
          </section>
          <Footer />
         */}


        </div>
       
    </main>
     
  );

}
export default Home;