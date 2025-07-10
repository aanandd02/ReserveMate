import React from "react";

const WhoAreWe = () => (
  <section className="who_are_we" id="who_are_we">
    <div className="container">

      {/* Left Text */}
      <div className="text_banner">
        <div className="card">
          <h1 className="heading" style={{ fontWeight: 300 }}>14</h1>
          <p>Restaurants</p>
        </div>
        <div className="card">
          <h1 className="heading" style={{ fontWeight: 300 }}>20</h1>
          <p>Chef In Kitchen</p>
        </div>
      </div>

      {/* Center Image */}
      <div className="image_banner">
        <img className="gradient_bg" src="center.svg" alt="gradient background" />
        <img src="whoweare.png" alt="food" />
      </div>

      {/* Right Text */}
      <div className="text_banner">
        <div className="card">
          <h1 className="heading" style={{ fontWeight: 300 }}>08</h1>
          <p>Years Of Experience</p>
        </div>
        <div className="card">
          <h1 className="heading" style={{ fontWeight: 300 }}>200</h1>
          <p>Food Dishes</p>
        </div>
      </div>

    </div>
  </section>
);

export default WhoAreWe;
