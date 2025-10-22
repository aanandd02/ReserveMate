import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => (
  <section className="about" id="about">
    <div className="container">

      {/* Left Content */}
      <div className="banner">
        <div className="top">
          <h1 className="heading">ABOUT US</h1>
          <p className="subheading">The only thing we're serious about is food.</p>
        </div>

        <p className="mid">
          Welcome to Shukla Bites — a place where culinary passion meets perfection. 
          Every dish is crafted with fresh ingredients, bold flavors, and love for food. 
          Our chefs take pride in serving you experiences that delight your senses 
          and bring joy to every bite.
        </p>

        <Link 
          to="menu" 
          smooth={true} 
          duration={500} 
          spy={true}
          className="exploreBtn"
        >
          Explore Menu <HiOutlineArrowRight className="arrowIcon" />
        </Link>
      </div>

      {/* Right Image */}
      <div className="banner">
        <div className="about_image_placeholder">
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Restaurant Interior" 
          />
        </div>
      </div>

    </div>
  </section>
);

export default About;
