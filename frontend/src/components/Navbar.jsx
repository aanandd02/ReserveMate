import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">SHUKLA_BITES</div>

      <div className={`navLinks ${show ? "showmenu" : ""}`}>
        <div className="links">
          <Link to="heroSection" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT US
          </Link>
          <Link to="qualities" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="team" spy={true} smooth={true} duration={500}>
            TEAM
          </Link>
          <Link to="reservation" spy={true} smooth={true} duration={500}>
            RESERVATION
          </Link>
        </div>

        <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn"
        >
          OUR MENU
        </Link>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
