
import React from "react";
import "../styles/profile.css";
 import Textscramble from '../components/textscramble'

const Profile: React.FC = () => {
  return (
    <section className="profile-section">
      <div className="profile-card">

        <div className="profilearrangement">
        <div className="profile-img-wrapper">
          <img src="/tall.jpg" alt="Profile" className="profile-img" />
        </div>

        <p className="profile-bio">
          I’m a passionate frontend developer with experience in building
          responsive, user-friendly web interfaces using HTML, CSS, JavaScript,
          and React. I love transforming ideas into beautiful, functional web
          experiences.
        </p>

        </div>
    
       <div className="profilearrangement-bottom">
         

        <h2 className="profile-name">Mark Obosojie Ohio</h2>
         
       

        <div className="profile-buttons">
          <a href=" /Mark Obosojie Ohio cv.pdf" download className="btn primary">
            Download CV
          </a>
          <a href="#contact" className="btn secondary"  onClick={() => window.location = './Contact'}>
            Hire Me
          </a>
        </div>
       </div>

      </div>
    </section>
  );
};

export default Profile;