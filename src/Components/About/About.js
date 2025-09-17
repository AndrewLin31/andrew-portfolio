import React from "react";
import './About.css';
import aboutImage from '../../Assets/about.jpg'

const About = () => {
    return (
        <div id="about" className="about-container">
          <div className="about-content-row">
            <div className="about-left">
              <img src={aboutImage} alt="about.jpg"/>
            </div>
            <div className="about-right">
              <div className="about-paragraphs">
                <h1>About Me</h1>
                <p>I'm a software engineer with a passion for building systems that connect hardware and software in meaningful ways. My background is in the embedded space where I've gained experience in developing real time electronic systems.</p>
                <p>I earned my degree in Electronic Systems Engineering from Texas A&M University, and since then I’ve worked on projects ranging from advanced defense technologies to innovative medical systems. Along the way, I’ve built skills in multiple programming languages and frameworks, but what excites me most is solving complex problems and turning ideas into practical, impactful tools.</p>
                <p>Outside of work, I enjoy exploring new technologies, experimenting with side projects, and continuing to grow as both an engineer and a collaborator.</p>
              </div>
              <div className="skills-section">
                <h1>Skills</h1>
                <div className="skills-list">
                    <span>C/C++</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>Git</span>
                    <span>Agile Methodologies</span>
                    <span>Problem Solving</span>
                    <span>Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About;

