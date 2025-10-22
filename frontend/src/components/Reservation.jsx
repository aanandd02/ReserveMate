import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt, FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import "./Reservation.css";

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/v1/reservation/send`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      toast.success(data.message);

      // ✅ Pass user's name to Success page
      navigate("/success", {
        state: { userName: `${formData.firstName} ${formData.lastName}` },
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
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="reservation_container">
        {/* Left Panel */}
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
              and let us craft an unforgettable dining experience for you.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="reservation_right">
          <div className="reservation_form_box">
            <h1>Book a Table</h1>
            <p>We’ll confirm your reservation via email</p>

            <form onSubmit={handleReservation}>
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
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

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
