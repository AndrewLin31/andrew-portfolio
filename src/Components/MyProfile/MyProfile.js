import React from "react"
import './MyProfile.css'
import landscape from '../../Assets/landscape.jpg'

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const MyProfile = () => {
    return (
        <div id="home" className="profile-container">
            <img src={landscape} alt="landscape.jpg" className="landscape"/>
            <h1 className="greeting">Hi, I'm Andrew</h1>
            <p className="intro">I'm a Software Engineer with experience in Embedded Systems development.</p>
            <div className="action-buttons">
                <div className="hire-me" onClick={() => scrollToSection("contact-section")}>Connect with me</div>
                <div className="resume" onClick={() => scrollToSection("resume-section")}>Resume</div>
            </div>
        </div>
    )
}
export default MyProfile
