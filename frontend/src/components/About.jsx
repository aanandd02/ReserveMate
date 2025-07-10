import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => (
  <section className="about" id="about">
    <div className="container">
      
      {/* Left Content */}
      <div className="banner">
        <div className="top">
          <h1 className="heading">ABOUT US</h1>
          <p>The only thing we're serious about is food.</p>
        </div>

        <p className="mid">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident possimus optio 
          adipisci dolores impedit illum iusto perferendis, laudantium quod accusamus 
          consequuntur consectetur, tempore nulla error iure reiciendis dolorem assumenda. 
          Necessitatibus fugit asperiores totam rem esse exercitationem iusto ipsum qui 
          dolore ex, accusantium repellat mollitia repellendus.
        </p>

        <Link 
          to="menu" 
          smooth={true} 
          duration={500} 
          spy={true}
          className="exploreMenuBtn"
        >
          Explore Menu <span><HiOutlineArrowRight /></span>
        </Link>
      </div>

      {/* Right Image */}
      <div className="banner">
        <img src="about.png" alt="about" />
      </div>
    </div>
  </section>
);

export default About;
