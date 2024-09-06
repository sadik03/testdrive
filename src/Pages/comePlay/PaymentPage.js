import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Convert rate to number if it's a string
  const initialRate = typeof state.rate === 'string' ? parseFloat(state.rate.replace(/[^0-9.-]+/g, "")) : state.rate;
  const [totalAmount, setTotalAmount] = useState(initialRate);

  const additionalCosts = {
    "Personal Coach": 50,
    "Clothes": 20,
    "Food": 30,
  };

  useEffect(() => {
    // Reset total amount when state.rate changes
    setTotalAmount(initialRate);
  }, [initialRate]);

  const handleFeatureChange = (event) => {
    const feature = event.target.value;
    if (event.target.checked) {
      setTotalAmount((prevTotal) => prevTotal + (additionalCosts[feature] || 0));
    } else {
      setTotalAmount((prevTotal) => prevTotal - (additionalCosts[feature] || 0));
    }
  };

  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/confirmation");
  };

  return (
    <>
      <ProgressBar />
      <motion.div
        className="payment-page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Payment for {state.name}</h1>
        <p>Base Rate: ₹{initialRate}</p>
        <div className="additional-options">
          <h2>Select Additional Options:</h2>
          {Object.keys(additionalCosts).map((feature) => (
            <label key={feature}>
              <input
                type="checkbox"
                value={feature}
                onChange={handleFeatureChange}
              />
              {feature} (+₹{additionalCosts[feature]})
            </label>
          ))}
        </div>
        <div className="total-amount">
          <h2>Total Amount: ₹{totalAmount}</h2>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </motion.div>
    </>
  );
};

export default PaymentPage;