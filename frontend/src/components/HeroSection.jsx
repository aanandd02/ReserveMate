import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./HeroSection.css";

const floatingIcons = ["🍴", "🥗", "🍔", "🍕", "🍣", "☕", "🍰"];

const HeroSection = () => {
  useEffect(() => {
    // Floating icons react to cursor
    const handleMouseMove = (e) => {
      const icons = document.querySelectorAll(".floating-icon");
      icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.02;
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        icon.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particles
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    let particles = [];
    const colors = ["#ff4d00", "#ff9a5b", "#ffd2b3"];
    const particleCount = 40;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 5 + 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll to Menu
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="heroSection" id="heroSection">
      <Navbar />

      {/* Particles */}
      <canvas id="particles"></canvas>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <h1 className="hero-title">Delicious</h1>
          <h2 className="hero-subtitle">Food Dishes</h2>
          <p className="hero-text">
            Experience the taste of perfection — where flavor meets passion.
            Every bite tells a story crafted with love and care.
          </p>
          <button className="hero-btn" onClick={scrollToMenu}>
            Explore Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <div className="hero-image enlarged">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Interior"
            />
            <div className="hero-overlay"></div>
          </div>
        </div>

        {/* Floating Food Icons */}
        {floatingIcons.map((icon, index) => (
          <span key={index} className={`floating-icon icon-${index}`}>
            {icon}
          </span>
        ))}

        {/* Scroll Down Arrow */}
        <div className="scroll-down" onClick={scrollToMenu}>
          &#x2193;
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
