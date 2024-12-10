import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Danmaihaja</a>
        </div>
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <button className="navbar-cta">Shop Now</button>
        </nav>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
