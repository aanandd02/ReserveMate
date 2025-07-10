import React from "react";


const Team = () => (
  <section className="team" id="team">
    <div className="container">
      
      {/* Heading Section */}
      <div className="heading_section">
        <h1 className="heading">OUR TEAM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
          perferendis laborum.
        </p>
      </div>

      {/* Team Members */}
      <div className="team_container">
        <div className="card">
          <img src="./team_member_1.png" alt="JOHNATHAN TYLER" />
          <h3>JOHNATHAN TYLER</h3>
          <p>Founder & Head Chef</p>
        </div>

        <div className="card">
          <img src="./team_member_2.png" alt="WADE WARREN" />
          <h3>WADE WARREN</h3>
          <p>Sous Chef</p>
        </div>

        <div className="card">
          <img src="./team_member_3.png" alt="JHON DOE" />
          <h3>JHON DOE</h3>
          <p>Fast Food Chef</p>
        </div>

        <div className="card">
          <img src="./team_member_4.png" alt="ALEX COAL" />
          <h3>ALEX COAL</h3>
          <p>Senior Chef</p>
        </div>
      </div>

    </div>
  </section>
);

export default Team;
