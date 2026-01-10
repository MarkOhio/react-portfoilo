
import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import ThemeToggle from "../components/ThemeToggle"; 
import "../styles/navbarResponsive.css"; // 👈 new file for responsive + animations
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={closeMenu}>
        <img id="nav-logo" src="logo.png" alt="Logo" />
      </div>



 {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li> 
      </ul>


     <div className="">
        <Link to="/contact" className="hire-btn">
          Hire Me
        </Link>
        <ThemeToggle />
      </div>


      {/* Hamburger icon visible on mobile */}
      <div className="menu-icon" onClick={toggleMenu} ref={iconRef}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

     
     
      

    </nav>
  );
};

export default Navbar;

