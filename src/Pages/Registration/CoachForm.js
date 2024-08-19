import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../CSS/CoachForm.css';

const CoachForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    certifications: "",
    contact: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, experience, certifications, contact, availability } = formData;
    return name && experience && certifications && contact && availability;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Coach registration successful!");
      // Additional functionality like sending data to server can be added here
    } else {
      toast.error("Please fill in all fields before submitting!");
    }
  };

  return (
    <div className="coach-form-container">
      <h2 className="coach-form-title">Coach Registration</h2>
      <form onSubmit={handleSubmit} className="coach-form">
        <div className="coach-form-group">
          <label className="coach-form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="coach-form-input"
          />
        </div>

        <div className="coach-form-group">
          <label className="coach-form-label">Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Describe your experience"
            required
            className="coach-form-textarea"
          ></textarea>
        </div>

        <div className="coach-form-group">
          <label className="coach-form-label">Certifications</label>
          <input
            type="text"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="Enter your certifications"
            required
            className="coach-form-input"
          />
        </div>

        <div className="coach-form-group">
          <label className="coach-form-label">Contact Information</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact information"
            required
            className="coach-form-input"
          />
        </div>

        <div className="coach-form-group">
          <label className="coach-form-label">Availability</label>
          <input
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Enter your availability"
            required
            className="coach-form-input"
          />
        </div>

        <div className="coach-form-buttons">
          <Button variant="primary" type="submit" className="coach-form-submit-button">
            Submit
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CoachForm;
