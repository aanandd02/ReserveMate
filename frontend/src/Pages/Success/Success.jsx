import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import "./Success.css";

const floatingIcons = [
  "🍽️", "🍷", "🥂", "🎉", "✨", "🍾", "🍰", "💫",
];

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || "Guest";

  // Confetti animation
  useEffect(() => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    // Auto redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="success-container">
      <motion.div
        className="success-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Reservation Confirmed 🎊</h1>
        <p>
          Congratulations <strong>{userName}</strong>! <br />
          Your table has been successfully reserved.
        </p>
        <motion.button
          className="home-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          Go to Home 🏠
        </motion.button>
      </motion.div>

      {/* Floating background icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: ["100vh", "-10vh"], opacity: [0, 1, 0] }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default Success;
