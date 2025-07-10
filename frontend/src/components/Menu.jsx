import React from "react";


const Menu = () => (
  <section className="menu" id="menu">
    <div className="container">
      
      {/* Heading Section */}
      <div className="heading_section">
        <h1 className="heading">POPULAR DISHES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
          iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
          pariatur eius et recusandae veritatis. Quasi, et molestias!
        </p>
      </div>

      {/* Dishes List - Static rendering */}
      <div className="dishes_container">
        <div className="card">
          <img src="./dinner1.jpeg" alt="ROASTED LAMB RUMP" />
          <h3>ROASTED LAMB RUMP</h3>
          <button>Dinner</button>
        </div>
        <div className="card">
          <img src="./dinner2.png" alt="CITRUS CURED SALMON" />
          <h3>CITRUS CURED SALMON</h3>
          <button>Dinner</button>
        </div>
        <div className="card">
          <img src="./breakfast1.png" alt="PAN SEARED SEA BASS" />
          <h3>PAN SEARED SEA BASS</h3>
          <button>Breakfast</button>
        </div>
        <div className="card">
          <img src="./dinner3.png" alt="STUFFED STRAWBERRY" />
          <h3>STUFFED STRAWBERRY</h3>
          <button>Dinner</button>
        </div>
        <div className="card">
          <img src="./lunch1.png" alt="BEEF BURGER MEAL" />
          <h3>BEEF BURGER MEAL</h3>
          <button>Lunch</button>
        </div>
        <div className="card">
          <img src="./dinner4.png" alt="MUSSELS SOUP" />
          <h3>MUSSELS SOUP</h3>
          <button>Dinner</button>
        </div>
        <div className="card">
          <img src="./dinner5.png" alt="ITALIAN SPAGHETTI" />
          <h3>ITALIAN SPAGHETTI</h3>
          <button>Dinner</button>
        </div>
        <div className="card">
          <img src="./dinner6.png" alt="GRILLED FISH" />
          <h3>GRILLED FISH</h3>
          <button>Dinner</button>
        </div>
      </div>
      
    </div>
  </section>
);

export default Menu;
