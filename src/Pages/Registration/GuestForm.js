import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../CSS/GuestForm.css';

const GuestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    return name && email && phone && message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Guest registration successful!");
      // Additional functionality like sending data to server can be added here
    } else {
      toast.error("Please fill in all fields before submitting!");
    }
  };

  return (
    <div className="guest-form-container">
      <h2 className="guest-form-title">Guest Registration</h2>
      <form onSubmit={handleSubmit} className="guest-form">
        <div className="guest-form-group">
          <label className="guest-form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="guest-form-input"
          />
        </div>

        <div className="guest-form-group">
          <label className="guest-form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="guest-form-input"
          />
        </div>

        <div className="guest-form-group">
          <label className="guest-form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="guest-form-input"
          />
        </div>

        <div className="guest-form-group">
          <label className="guest-form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="guest-form-textarea"
          ></textarea>
        </div>

        <div className="guest-form-buttons">
          <Button variant="primary" type="submit" className="guest-form-submit-button">
            Submit
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default GuestForm;
