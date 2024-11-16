import React, { useState } from 'react';
import '../styles/About.scss';  // Assuming your CSS is in this file

const AboutMePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('popup-overlay')) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <button className="uneven-wave-button" onClick={handleTogglePopup}>
        My intro
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={handleClickOutside}>
          <div className="popup-content">
            <h2>About Me</h2>
            <p>
              A passionate full-stack developer with expertise in <strong>React</strong>,{' '}
              <strong>TypeScript</strong>, and <strong>Node.js</strong> 🌐, focused on building
              scalable, user-centric applications. Based in <strong>Morocco</strong> 🇲🇦, I thrive
              in collaborative environments, where I leverage my problem-solving skills to deliver
              high-quality, efficient solutions 💻. When I'm not coding, you’ll find me exploring
              new technologies 📚, traveling ✈️, or enjoying a good book 📖. Always eager to learn
              and grow, I'm ready to contribute to innovative projects and make an impact! 🚀
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMePopup;
