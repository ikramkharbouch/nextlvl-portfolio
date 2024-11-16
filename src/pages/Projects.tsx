import React from 'react';
import { FaRegSadCry, FaRegSmile, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/Projects.scss'; // Optional, if you want to style it separately.

const Projects: React.FC = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My Projects (Coming Soon!)</h2>
        </div>
        <div className="projects-content">
          <p className="projects-description">
            I'm currently working on exciting projects that will soon be displayed here!  
            The page is under construction, but stay tuned for updates.
          </p>
          <div className="projects-status">
            <FaExclamationTriangle className="icon-warning" />
            <p>Projects are being prepared, and this section will be available soon.</p>
            <FaRegSmile className="icon-smile" />
          </div>
        </div>
        <div className="projects-footer">
          <p>Thanks for your patience!</p>
          <FaRegSadCry className="icon-sad" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
