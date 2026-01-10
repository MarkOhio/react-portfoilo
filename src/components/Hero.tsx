import "../styles/hero.css";
import "../hooks/useScrollAnimation.ts";
import heroImg from "../assets/logo.png"; // replace with your image name
import Stats from "./Stats";
 import Textscramble from '../components/textscramble'
 import "../hooks/slideUpFade.css"
 import { Link, useNavigate } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text slide-up-fade">
        <h1><span>Mark</span> Obosojie Ohio</h1>
       {/* <Textscramble /> */}
        <p id="herop">
          Building fast, elegant, and user-focused web experiences that bring ideas to life.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>
          
          <Link to="/contact" className="btn secondary">
            Hire Me
          </Link>
        </div>
        
      </div>

      <div className="hero-image">
        <img src="vite.svg"  alt="Mark - Developer" />
      </div>

    <Stats/>
    </section>
  );
}

export default Hero;
