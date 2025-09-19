
import React, { useState, useEffect } from "react";
import "./Projects.css";
import MyProjects from "../../Assets/MyProjects.js";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const total = MyProjects.length;

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const goToNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const work = MyProjects[current];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <div id="projects" className="projects-slideshow-container">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="slideshow-grid">
        <div className="slideshow-details">
          <h2 className="project-name">{work.p_name}</h2>
          <p className="project-desc">{work.p_desc}</p>
          {work.p_link && (
            <a href={work.p_link} target="_blank" rel="noopener noreferrer" className="project-link-btn">Learn More</a>
          )}
          <div className="slideshow-indicator">{current + 1} / {total}</div>
        </div>

        <div className="slideshow-wrapper">
          <button className="slideshow-arrow" onClick={goToPrev} aria-label="Previous project" title="Previous project"><span>&lt;</span></button>
          <div className="slideshow-image-card">
            <img src={work.p_img} alt={work.p_name} className="slideshow-image" />
          </div>
          <button className="slideshow-arrow" onClick={goToNext} aria-label="Next project" title="Next project"><span>&gt;</span></button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

