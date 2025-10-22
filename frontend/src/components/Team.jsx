import React from "react";
import "./Team.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jonathan Tyler",
    role: "Founder & Head Chef",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Wade Warren",
    role: "Sous Chef",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Jhon Doe",
    role: "Fast Food Chef",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Alex Coal",
    role: "Senior Chef",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const Team = () => {
  return (
    <section className="team_section" id="team">
      <div className="team_container">
        <div className="team_header">
          <h1>OUR TEAM</h1>
          <p>
            Meet the passionate chefs and culinary experts behind{" "}
            <span className="brand">SHUKLA_BITES</span>. Each one brings
            creativity and a unique skill to our kitchen.
          </p>
        </div>

        <div className="team_grid">
          {teamMembers.map((member, idx) => (
            <div className="team_card" key={idx}>
              <div className="card_image">
                <img src={member.avatar} alt={member.name} />
                <div className="overlay">
                  <div className="socials">
                    <a href={member.socials.linkedin}><FaLinkedin /></a>
                    <a href={member.socials.twitter}><FaTwitter /></a>
                    <a href={member.socials.instagram}><FaInstagram /></a>
                  </div>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
