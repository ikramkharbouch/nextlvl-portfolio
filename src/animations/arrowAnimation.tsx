import React from "react";
import "../styles/ArrowAnimation.scss"; // External CSS file

const ArrowAnimation: React.FC = () => {
    return (
        <div className="arrows-container">
          <div className="arrow">&#8595;</div> {/* Down arrow */}
          <div className="arrow">&#8595;</div> {/* Down arrow */}
          <div className="arrow">&#8595;</div> {/* Down arrow */}
          <div className="arrow">&#8595;</div> {/* Down arrow */}
        </div>
      );
    };

export default ArrowAnimation;
