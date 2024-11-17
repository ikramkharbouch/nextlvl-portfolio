import React from "react";
import "../styles/Companies.scss";

const Companies = () => {
  const companies = [
    { name: "Rumzer", logo: "/images/rumzer_logo.jpeg", url: "https://rumzer.com/" },
    { name: "Logigroup", logo: "/images/logo_logigroup.png", url: "https://www.logigroup.com/" },
    { name: "Aikyo", logo: "/images/aikyo_logo.jpeg", url: "https://aikyo.io/" },
    { name: "Um6p", logo: "/images/um6p_logo.png", url: "https://um6p.ma/" },
    { name: "Finamaze", logo: "/images/finamaze_logo.png", url: "https://finamaze.com/" },
  ];

  return (
    <section className="companies-section">
      <div className="companies-container">
        
        {companies.map((company, index) => (
          <a href={company.url} target="_blank" key={index}>
          <div>
            <div key={index} className="company-box">
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            </div>
            <h3>{company.name}</h3>
          </div></a>
        ))}
      </div>
    </section>
  );
};

export default Companies;
