// In Experience.tsx

import React, { useEffect, useState } from "react";
import "../styles/Experience.scss"; // Import the CSS styles

const Experience = () => {
  const experiences = [
    {
      company: "Logigroup",
      role: "Frontend Developer",
      duration: "Jan 2020 – Dec 2021",
      description:
        "At Logigroup, I had the opportunity to dive into the intricacies of Angular, working on a complex project aimed at streamlining the company’s operations. My role involved enhancing the functionality of their platform, ensuring seamless integration of features, and optimizing performance. Through collaboration with cross-functional teams, I helped shape a solution that significantly improved the user experience. The project sharpened my skills in front-end development and exposed me to the fast-paced demands of international projects.        ",
      logo: "/images/logo_logigroup.png",
    },
    {
      company: "Rumzer",
      role: "Fullstack Developer",
      duration: "Mar 2022 – Oct 2023",
      description:
        "Working remotely for Rumzer was an exciting challenge where I played a key role in developing compliance software that addressed real-world problems. I worked on designing and building features that allowed users to easily track and comply with regulatory requirements. The project was a great opportunity to hone my problem-solving skills, particularly in ensuring that the software was both intuitive and secure. The experience taught me the value of clear communication and time management, especially in a remote setup.        ",
      logo: "/images/rumzer_logo.jpeg",
    },
    {
      company: "Aikyo",
      role: "Software Engineer",
      duration: "Nov 2023 – Present",
      description:
        "At Box Analytics, I was responsible for maintaining and improving an app that helped manage mall operations. From fixing bugs to optimizing workflows, I worked closely with the development team to ensure the app remained efficient and user-friendly. The fast-paced environment taught me the importance of quick troubleshooting and adaptability. I also gained insight into the critical role software plays in managing large-scale operations and ensuring business continuity.        ",
      logo: "/images/aikyo_logo.jpeg",
    },
    {
      company: "FinaMaze",
      role: "Software Engineer",
      duration: "Nov 2023 – Present",
      description:
        "Contributing to Finamaze was an exciting experience that allowed me to add features to their innovative financial platform. I collaborated with the team to integrate new functionalities that enhanced the user experience and provided more insightful data analysis. Working in fintech pushed me to think about data security, scalability, and performance optimization. It was an excellent opportunity to broaden my knowledge of the finance sector while sharpening my technical skills in React and Node.js.        ",
      logo: "/images/finamaze_logo.png",
    },
    {
      company: "Um6p",
      role: "Software Engineer",
      duration: "Nov 2023 – Present",
      description:
        "During my time at UM6P, I developed an app that helped manage hospital and pharmacy operations for a startup. The project involved creating an intuitive interface for medical staff and streamlining workflows for better efficiency. This hands-on experience not only improved my development skills but also gave me a deeper understanding of how technology can improve critical services like healthcare. I worked on both the front-end and back-end, making sure the app was responsive, secure, and scalable for future growth.        ",
      logo: "/images/um6p_logo.png",
    },
  ];

  return (
    <div className="experience-container">
      <div className="timeline-container">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <div className="experience-title">
                    <div className="company-logo">
                        <img src={experience.logo} />
                    </div>
                <h3>{experience.company}</h3>
                
                </div>
              
              <p className="timeline-role">
                {experience.role} - {experience.duration}
              </p>
              <p className="timeline-desc">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
