import React from "react";
import "./WhoAreWe.css";

const WhoAreWe = () => (
  <section className="who_are_we" id="who_are_we">
    <div className="container">

      {/* Left Stats */}
      <div className="text_banner left">
        <div className="card">
          <h1 className="heading">1</h1>
          <p>Flagship Restaurant</p>
        </div>
        <div className="card">
          <h1 className="heading">15</h1>
          <p>Expert Chefs</p>
        </div>
      </div>

      {/* Center Image */}
      <div className="image_banner">
        <div className="circle_image">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Modern Restaurant Interior"
          />
        </div>
      </div>

      {/* Right Stats */}
      <div className="text_banner right">
        <div className="card">
          <h1 className="heading">2024</h1>
          <p>Founded Year</p>
        </div>
        <div className="card">
          <h1 className="heading">500+</h1>
          <p>Happy Customers</p>
        </div>
      </div>

    </div>
  </section>
);

export default WhoAreWe;
