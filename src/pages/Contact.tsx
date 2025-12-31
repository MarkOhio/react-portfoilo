import React from 'react'
import "./contact.css";
import Contactcom from "../components/Contactcom"
// import ThemeToggle from "../components/ThemeToggle"; 
import SocialMedia from "../components/SocialMedia"; 
function Contact() {
  return (
    <div className="main-contact">

     <div className="con-title">
       <h2>Let’s Collaborate</h2>
      <p>Have an idea or project? Reach out and let’s make it happen!</p>
     </div>

      <div className='contact'>      
        <div className="social">
          <SocialMedia/>
        </div>

        <div className="con">
          <Contactcom/>
        </div>
      </div>
    </div>

   
  )
}

export default Contact