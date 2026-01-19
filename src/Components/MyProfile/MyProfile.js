import React from "react"
import "./MyProfile.css"
import landscape from "../../Assets/landscape.jpg"
import SplitText from "./SplitText";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

const MyProfile = () => {
    return (
        <div id="home" className="profile-container">
            <img src={landscape} alt="landscape.jpg" className="landscape"/>
            <div className="profile-overlay">
              <SplitText
                text="Hi, I'm Andrew"
                className="greeting"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <p className="intro">I'm a Software Engineer with experience in Embedded Systems development.</p>
              <div className="action-buttons">
                  <div className="hire-me" onClick={() => scrollToSection("contact-section")}>Connect with me</div>
                  <div className="resume" onClick={() => scrollToSection("resume-section")}>Resume</div>
              </div>
            </div>
        </div>
    )
}
export default MyProfile;
