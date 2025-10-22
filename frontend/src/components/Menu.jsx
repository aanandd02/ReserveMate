import React, { useRef } from "react";
import "./Menu.css";

const dishes = [
  { name: "Paneer Butter Masala", type: "Lunch", price: "₹250", img: "./images/Paneer Butter Masala.jpg" },
  { name: "Masala Dosa", type: "Breakfast", price: "₹120", img: "./images/Masala Dosa.jpg" },
  { name: "Chole Bhature", type: "Breakfast", price: "₹150", img: "./images/Chole Bhature.jpg" },
  { name: "Biryani (Chicken)", type: "Lunch", price: "₹300", img: "./images/Biryani (Chicken).jpg" },
  { name: "Idli Sambhar", type: "Breakfast", price: "₹100", img: "./images/Idli Sambhar.jpg" },
  { name: "Rajma Chawal", type: "Lunch", price: "₹180", img: "./images/Rajma Chawal.jpg" },
  { name: "Gulab Jamun", type: "Dessert", price: "₹80", img: "./images/Gulab Jamun.jpg" },
  { name: "Pav Bhaji", type: "Dinner", price: "₹200", img: "./images/Pav Bhaji.jpg" },
  { name: "Butter Naan with Dal Makhani", type: "Dinner", price: "₹220", img: "./images/Butter Naan with Dal Makhan.jpg" },
  { name: "Vada Pav", type: "Snack", price: "₹50", img: "./images/Vada Pav.jpg" },
  { name: "Aloo Paratha", type: "Breakfast", price: "₹90", img: "./images/Aloo Paratha.jpg" },
  { name: "Chicken Tikka", type: "Dinner", price: "₹350", img: "./images/Chicken Tikka.jpg" },
  { name: "Dhokla", type: "Snack", price: "₹70", img: "./images/Dhokla.jpg" },
  { name: "Pani Puri", type: "Snack", price: "₹60", img: "./images/Pani Puri.jpg" },
  { name: "Samosa", type: "Snack", price: "₹40", img: "./images/Samosa.jpg" },
  { name: "Matar Paneer", type: "Lunch", price: "₹240", img: "./images/Matar Paneer.jpg" },
  { name: "Aloo Gobi", type: "Lunch", price: "₹200", img: "./images/Aloo Gobi.jpg" },
  { name: "Momos", type: "Snack", price: "₹120", img: "./images/Momos.jpg" },
  { name: "Pav Bhaji Cheese", type: "Snack", price: "₹220", img: "./images/Pav Bhaji Cheese.jpg" },
  { name: "Dahi Vada", type: "Snack", price: "₹80", img: "./images/Dahi Vada.jpg" },
  { name: "Lassi", type: "Drink", price: "₹60", img: "./images/Lassi.jpg" },
  { name: "Aloo Tikki", type: "Snack", price: "₹50", img: "./images/Aloo Tikki.jpg" },
  { name: "Kachori", type: "Breakfast", price: "₹40", img: "./images/Kachori.jpg" },
  { name: "Malai Kofta", type: "Lunch", price: "₹260", img: "./images/Malai Kofta.jpg" },
  { name: "Tandoori Chicken", type: "Dinner", price: "₹380", img: "./images/Tandoori Chicken.jpg" },
  { name: "Pesarattu", type: "Breakfast", price: "₹100", img: "./images/Pesarattu.jpg" },
  { name: "Sambar Rice", type: "Lunch", price: "₹150", img: "./images/Sambar Rice.jpg" },
  { name: "Upma", type: "Breakfast", price: "₹90", img: "./images/Upma.jpg" },
  { name: "Chicken Curry", type: "Lunch", price: "₹350", img: "./images/Chicken Curry.jpg" },
  { name: "Fish Curry", type: "Lunch", price: "₹300", img: "./images/Fish Curry.jpg" },
  { name: "Prawn Masala", type: "Dinner", price: "₹400", img: "./images/Prawn Masala.jpg" },
  { name: "Rajma Masala", type: "Lunch", price: "₹180", img: "./images/Rajma Masala.jpg" },
  { name: "Bhindi Masala", type: "Lunch", price: "₹200", img: "./images/Bhindi Masala.jpg" },
  { name: "Pulao", type: "Lunch", price: "₹250", img: "./images/Pulao.jpg" },
  { name: "Kheer", type: "Dessert", price: "₹80", img: "./images/Kheer.jpg" },
  { name: "Jalebi", type: "Dessert", price: "₹60", img: "./images/Jalebi.jpg" },
];

const Menu = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <div className="menu-heading">
          <h1 className="menu-title">POPULAR INDIAN DISHES</h1>
          <p className="menu-description">
            Taste the flavors of India! Swipe or click arrows to explore our most loved dishes.
          </p>
        </div>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={() => scroll("left")}>
            &lt;
          </button>

          <div className="dishes-carousel" ref={scrollRef}>
            {dishes.map((dish, index) => (
              <div key={index} className="dish-card">
                <div className="dish-image">
                  <img src={dish.img} alt={dish.name} loading="lazy" />
                </div>
                <h3 className="dish-name">{dish.name}</h3>
                <div className="dish-footer">
                  <span className="dish-type">{dish.type}</span>
                  <span className="dish-price">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={() => scroll("right")}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
