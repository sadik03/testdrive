import {  Button } from "react-bootstrap";
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../CSS/MemberForm.css';

const MemberForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    aadharNo: "",
    photo: null,
    address: "",
    phone: "",
    otp: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file
    }));
  };

  const validateForm = () => {
    const { name, age, aadharNo, address, phone, otp } = formData;
    return name && age && aadharNo && address && phone && otp && formData.photo;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Member registration successful!");
    } else {
      toast.error("Please fill in all fields before submitting!");
    }
  };

  const handleDownloadPDF = () => {
    if (validateForm()) {
      const doc = new jsPDF();
      doc.text("Registration Details", 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 20);
      doc.text(`Age: ${formData.age}`, 10, 30);
      doc.text(`Aadhar No: ${formData.aadharNo}`, 10, 40);
      doc.text(`Address: ${formData.address}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 60);
      doc.save("Member_Registration.pdf");
    } else {
      toast.error("Please fill in all fields before downloading the PDF!");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Member Registration</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Aadhar No</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            placeholder="Enter your Aadhar number"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            required
            className="form-file-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">OTP</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
            className="form-input"
          />
        </div>

        <div className="form-buttons">
          <Button variant="primary" type="submit" className="form-submit-button">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleDownloadPDF} className="form-download-button">
            Download PDF
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default MemberForm;
