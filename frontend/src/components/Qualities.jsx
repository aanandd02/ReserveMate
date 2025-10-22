import React from "react";
import "./Qualities.css";

const Qualities = () => (
  <section className="qualities" id="qualities">
    <div className="heading_section">
      <h2>Why Choose Us</h2>
      <p>We blend taste, speed, and quality to serve you an unforgettable dining experience.</p>
    </div>

    <div className="container">
      <div className="card">
        <div className="icon">🍽️</div>
        <p className="title">QUALITY FOOD</p>
        <p className="description">
          Handpicked ingredients, authentic recipes, and expert chefs ensure every dish tastes divine.
        </p>
      </div>

      <div className="card">
        <div className="icon">😋</div>
        <p className="title">SUPER TASTE</p>
        <p className="description">
          Each bite bursts with flavor — because we believe great taste is the heart of every meal.
        </p>
      </div>

      <div className="card">
        <div className="icon">⚡</div>
        <p className="title">FAST DELIVERY</p>
        <p className="description">
          Fresh and hot meals, delivered at lightning speed — satisfaction served on time, every time.
        </p>
      </div>
    </div>
  </section>
);

export default Qualities;
