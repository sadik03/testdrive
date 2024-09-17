import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import "./SportsDetail.css";

const SportsDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [additionalFeatures, setAdditionalFeatures] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const featureFees = {
    "Equipment Rental": 20,
    "Personal Coach": 50,
    "Nutrition Plan": 30,
    "VIP Access": 100,
  };

  if (!state) {
    return <div>No sport details available.</div>;
  }

  const { name, description, place, rate } = state;

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDates((prevDates) =>
      prevDates.includes(date) ? prevDates.filter((d) => d !== date) : [...prevDates, date]
    );
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleFeatureChange = (event) => {
    const feature = event.target.value;
    setAdditionalFeatures((prevFeatures) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  const handleRegister = () => {
    if (selectedDates.length > 0 && selectedTime && userName && email) {
      setIsRegistered(true);
      navigate("/payment", {
        state: {
          name,
          rate,
          selectedDates,
          selectedTime,
          additionalFeatures,
          featureFees,
          userName,
          email,
          phoneNumber,
        },
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="cards-container-wrapper  bg-blue-100 dark:bg-gray-800 pb-10 lg:pb-20">
      <ProgressBar />
      <motion.div
        className="sports-detail-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div className="header-container" whileHover={{ scale: 1.05 }}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p><strong>Location:</strong> {place}</p>

          <p><strong>Rate:</strong> {rate}</p>

              </motion.div>

        <motion.div className="form-container" whileHover={{ backgroundColor: "#f7f7f7" }}>
          <h2>Register for {name}</h2>
          <label>
            Full Name:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Select Dates:
            <input
              type="date"
              value={selectedDates[selectedDates.length - 1] || ""}
              onChange={handleDateChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
            />
          </label>
          <div className="features">
            <h3>Additional Features:</h3>
            {Object.keys(featureFees).map((feature) => (
              <label key={feature} className="feature-label">
                <input
                  type="checkbox"
                  value={feature}
                  checked={additionalFeatures.includes(feature)}
                  onChange={handleFeatureChange}
                />
                {feature} (+₹{featureFees[feature]})
              </label>
            ))}
          </div>
          <button className="register-button" onClick={handleRegister}>
            {isRegistered ? "Registered" : "Register Now"}
          </button>
          {isRegistered && <p className="success-message">Thank you for registering! Proceeding to payment...</p>}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SportsDetail;
