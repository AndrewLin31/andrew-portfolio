import React from "react";
import profile from '../../Assets/profile.jpg';
import './NavBar.css';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
    return (
        <div className="nav-bar">
            <img src={profile} alt="profile.jpg" className="circle-profile"/>
            <ul className="nav-menu">
                <li><p onClick={() => scrollToSection("home-section")}>Home</p></li>
                <li><p onClick={() => scrollToSection("about-section")}>About Me</p></li>
                <li><p onClick={() => scrollToSection("projects-section")}>Projects</p></li>
                <li><p onClick={() => scrollToSection("resume-section")}>Resume</p></li>
            </ul>
            <div className="nav-connect">
                <p onClick={() => scrollToSection("contact-section")}>Contact</p>
            </div>
        </div>
    );
}

export default Navbar;
