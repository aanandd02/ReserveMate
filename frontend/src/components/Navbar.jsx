import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <FaUtensils className="logo-icon" />
        <span>
          SHUKLA<span className="accent">_BITES</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${show ? "active" : ""}`}>
        <div className="links">
          <Link to="heroSection" spy={true} smooth={true} duration={0}>
            HOME
          </Link>
          <Link to="about" spy={true} smooth={true} duration={0}>
            ABOUT
          </Link>
          <Link to="qualities" spy={true} smooth={true} duration={0}>
            SERVICES
          </Link>
          <Link to="team" spy={true} smooth={true} duration={0}>
            TEAM
          </Link>
          <Link to="reservation" spy={true} smooth={true} duration={0}>
            RESERVATION
          </Link>
        </div>

        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={0}
          className="menu-btn"
        >
          OUR MENU
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
