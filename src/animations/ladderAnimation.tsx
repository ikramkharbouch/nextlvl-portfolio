import React, { Key, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/LadderAnimation.scss";

const LadderAnimation: React.FC = () => {
  const [skills, setSkills] = useState<
    {
      id: Key | null | undefined;
      skill: string;
      tools: string[];
    }[]
  >([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<string[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Function to open the popup and set its content
  const handleItemClick = (tools: string[]) => {
    setPopupContent(tools);
    setPopupOpen(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Close popup if click is outside of the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopupOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const keySkills = [
      {
        id: 1,
        skill: "Full-Stack Development",
        tools: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Angular", 'PHP'],
      },
      {
        id: 2,
        skill: "Database Management",
        tools: ["PostgreSQL", "MongoDB", "MySQL"],
      },
      {
        id: 3,
        skill: "API Development & Integration",
        tools: ["REST", "GraphQL", "Express.js"],
      },
      {
        id: 4,
        skill: "Version Control & CI/CD",
        tools: ["Git", "GitHub", "Jenkins", "Docker"],
      },
      {
        id: 5,
        skill: "Problem Solving & Debugging",
        tools: ["VS Code", "Chrome DevTools", "Jest"],
      },
      { id: 6, skill: "UI/UX Design", tools: ["Figma", "Ant Design", "CSS3"] },
      {
        id: 7,
        skill: "Team Collaboration & Agile Methodologies",
        tools: ["Jira", "Trello", "Slack"],
      },
    ];
    const reversedKeySkills = [...keySkills].reverse();

    setSkills(reversedKeySkills);
  }, []);

  // Check if the screen width is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set isMobile based on screen width
    };

    // Listen to window resize
    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="ladder-container">
        <div className="ladder">
          {skills.map((item, index) => (
            <div key={index}>
              <motion.div
                key={index}
                className="box"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: -index * 50, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className="skill"
                  key={index}
                  onClick={
                    isMobile ? () => handleItemClick(item.tools) : undefined
                  }
                >
                  {item.skill}
                </div>
                <div className="tools">
                  {item.tools.map((tool, index) => (
                    <div key={index}>
                      <span key={index} className="tool-badge">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button className="close-popup" onClick={handleClosePopup}>
              &times;
            </button>
            <h2>Tech Toolbox</h2>
            <div className="tools-container">
              {popupContent.map((tool, index) => (
                <div key={index}>
                  <span key={index} className="tool-badge">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LadderAnimation;
