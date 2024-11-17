import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.tsx";

const Menu = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const menuItems = [
    { item: "Main()", link: "/" },
    { item: "Projects", link: "/projects" },
    { item: "Experience", link: "/experience" },
    { item: "Contact", link: "/contact" },
    { item: "Blog", link: "/blog" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Change background color after scrolling 50px
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`menu ${scrolled ? 'scrolled' : ''}`}>
      <ul className="menu-items">
        {menuItems.map((item, index) => (
          <li key={index}>
            <p>
              {" "}
              <Link to={item.link} className="menu-item">
                {item.item}
              </Link>
            </p>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default Menu;
