import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import "./NotFound.css";

const NotFound = () => {
  useEffect(() => {
    // Floating icons animation
    const icons = document.querySelectorAll(".nf-floating");
    icons.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 1}s`;
    });
  }, []);

  return (
    <section className="notFound-container">
      {/* Floating Emojis */}
      <span className="nf-floating">🍕</span>
      <span className="nf-floating">🥗</span>
      <span className="nf-floating">🍔</span>
      <span className="nf-floating">🍩</span>
      <span className="nf-floating">☕</span>

      <motion.div
        className="notFound-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Animation"
          className="nf-image"
        />

        <h1>Oops! You’re Lost</h1>
        <p>
          The page you’re looking for might have been moved, deleted, or
          doesn’t exist anymore.
        </p>

        <Link to={"/"} className="nf-btn">
          Back to Home <HiOutlineArrowNarrowRight />
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
