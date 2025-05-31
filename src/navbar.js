import React, { useState, useEffect } from "react";
import logo from "./img/logo.png";//./assets/logo.png"; // Adjust the path based on your project structure
import "./navbar.css"; // Importing the CSS file


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  // Smooth scrolling to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 60, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu on click
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "skills", "projects", "certification"];
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
        {["home", "education", "skills", "projects", "certification"].map((item) => (
          <li
            key={item}
            className={`nav-item ${activeSection === item ? "active" : ""}`}
            onClick={() => scrollToSection(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      <div className="mobile-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
