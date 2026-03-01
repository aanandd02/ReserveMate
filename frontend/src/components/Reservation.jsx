import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUserAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import "./Reservation.css";

const Reservation = () => {
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReservation = async (e) => {
    e.preventDefault();

    if (!BACKEND_URL) {
      toast.error("Backend URL not configured!");
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/reservation/send`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      );

      toast.success(response.data.message);

      navigate("/success", {
        state: {
          userName: `${formData.firstName} ${formData.lastName}`,
        },
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
      });

    } catch (error) {
      console.error("Reservation Error:", error);

      if (error.response) {
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Server not responding. Please try again.");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="reservation_container">
        
        {/* LEFT PANEL */}
        <div className="reservation_left">
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant Table"
            className="reservation_img"
          />
          <div className="overlay_text">
            <h2>Reserve Your Seat 🍽️</h2>
            <p>
              Whether it’s a cozy dinner or a celebration, book your table now
              and enjoy an unforgettable dining experience.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="reservation_right">
          <div className="reservation_form_box">
            <h1>Book a Table</h1>
            <p>We’ll confirm your reservation via email</p>

            <form onSubmit={handleReservation}>

              {/* Name Fields */}
              <div className="input_group">
                <div className="input_field">
                  <FaUserAlt className="icon" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input_field">
                  <FaUserAlt className="icon" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="input_group">
                <div className="input_field">
                  <FaCalendarAlt className="icon" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input_field">
                  <FaClock className="icon" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="input_group">
                <div className="input_field">
                  <FaEnvelope className="icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input_field">
                  <FaPhoneAlt className="icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="reserve_btn">
                Reserve Now <HiOutlineArrowNarrowRight />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reservation;