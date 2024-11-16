import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "../context/ThemeSwitcher.tsx";
import { Link } from "react-router-dom";

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
        {menuItems.map((item) => (
          <li>
            <p>
              {" "}
              <Link to={item.link} className="menu-item">
                {item.item}
              </Link>
            </p>
          </li>
        ))}
      </ul>
      {/* to work on it later */}
      {/* <ThemeSwitcher /> Add switcher to the right */}
    </div>
  );
};

export default Menu;
