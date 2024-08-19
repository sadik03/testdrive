import React, { useState } from 'react';
import "./CSS/AdmissionForm.css";
import BackgroundImage from "../assets/bn6.jpg";  // Import the background image

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundAttachment: 'fixed', // Make the background image fixed
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    overflowY: 'auto', // Allow the container to be scrollable
  };

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(12px)',
    maxWidth: '500px',
    width: '100%',
    padding: '20px',
    margin: '20px auto', // Center the form horizontally
    zIndex: 1,
    position: 'relative',
  };

  return (
    <div style={containerStyle}>
         <div className='form-card'>
      <div style={formContainerStyle}>
       
        <h2>Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Sports:</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select Sports</option>
              <option value="Football">Football</option>
              <option value="Cricket">Cricket</option>
              <option value="Badminton">Badminton</option>
              <option value="Swimming">Swimming</option>
              <option value="Yoga">Yoga</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AdmissionForm;
