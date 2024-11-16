import React from "react";
import Menu from "../components/Menu.tsx";
import "../styles/Home.scss";
import LadderAnimation from "../animations/ladderAnimation.tsx";
import Companies from "../components/Companies.tsx";
import ArrowAnimation from "../animations/arrowAnimation.tsx";
import Footer from "../components/Footer.tsx";
import AboutMePopup from "../components/AboutmePopup.tsx";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div>
        <div className="home-container">
          <section className="intro-section">
            <div className="about-section">
              <div className="photo-intro">
                <div className="home-avatar">
                  <img src="/images/me-coding.jpeg" />
                </div>
                <div className="hi-section">
                  <h1>Hi, I am Ikram 👋</h1>
                  {/* <p>
                    Passionate about creating seamless digital experiences, I
                    specialize in building innovative and user-friendly web
                    applications. With a keen eye for detail and a love for
                    problem-solving, I transform ideas into interactive,
                    responsive designs that deliver results.
                  </p> */}
                </div>
              </div>
              <h1 className="about-title">
                And I am Building the Web, One Line at a Time
              </h1>
              <p className="about-text">
                Coffee in one hand, code in the other, transforming ideas into
                smooth, interactive experiences. Whether it's sleek designs or
                lightning-fast performance, creating websites that are as fun as
                they are functional is my game. Let’s build something awesome
                together, one pixel at a time!
              </p>
            </div>
          </section>
          <AboutMePopup />

          <section className="key-skills">
            <h1>Key skills:</h1>
            <div className="ladder-container">
              <LadderAnimation />
            </div>
          </section>

          <section className="companies">
            <h1>Companies that shaped my career:</h1>
            <Companies />
          </section>

          <section className="contact">
            <h1>Contact me: </h1>
            <ArrowAnimation />

            <Link to="/contact"><button className="blob-button">Contact Me</button></Link>

          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
