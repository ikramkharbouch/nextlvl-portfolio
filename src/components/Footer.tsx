import React from 'react';
import '../styles/Footer.scss';  // Make sure to import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Title */}
        <h2 className="footer-title">You just landed on my Portfolio!</h2>
        
        {/* Tech Stack Section - Remove Node.js and PostgreSQL */}
        <div className="footer-tech-stack">
          <span>🖥️ React</span>
          <span>🎨 CSS / Styled Components</span>
          <span>🛠️ TypeScript</span>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://github.com/ikramkharbouch" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-label="GitHub"></i> 🐙
          </a>
          <a href="https://twitter.com/geekyumeko" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" aria-label="Twitter"></i> 🐦
          </a>
          <a href="https://linkedin.com/in/ikram-kharbouch" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-label="LinkedIn"></i> 🔗
          </a>
        </div>

        {/* Fun Geeky Code Section */}
        <span className="footer-code">
          &lt;div className="footer"&gt;<br />
          &nbsp;&nbsp;&nbsp;console.log(&#39;Coding is fun!&#39;);<br />
          &nbsp;&nbsp;&nbsp;return &#123; &lt;/div&gt;&#125;
        </span>
      </div>
    </footer>
  );
};

export default Footer;
