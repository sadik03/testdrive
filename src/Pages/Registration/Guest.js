import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { jsPDF } from "jspdf";

import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Guest = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    otp: "",
    bookingHours: "",
    sportsOption: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { email, phone, otp, bookingHours, sportsOption } = formData;
    if (!email || !phone || !otp || !bookingHours || !sportsOption) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = (userType) => {
    if (validateForm()) {
      // Handle form submission logic
      toast.success(`${userType} registration successful!`);
    }
  };

  const handleDownloadPDF = (userType) => {
    if (validateForm()) {
      const doc = new jsPDF();
      doc.text(`Registration Details for ${userType}`, 10, 10);
      doc.text(`Email: ${formData.email}`, 10, 20);
      doc.text(`Phone: ${formData.phone}`, 10, 30);
      doc.text(`Booking Hours: ${formData.bookingHours}`, 10, 40);
      doc.text(`Sports Option: ${formData.sportsOption}`, 10, 50);
      doc.save(`${userType}_Registration.pdf`);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Guest Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="form-fields"
          >
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              <Button variant="success" className="mt-1">
                Send OTP
              </Button>
            </Form.Group>

            <Form.Group controlId="formOtp">
              <Form.Label className="mt-3">OTP</Form.Label>
              <Form.Control
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
              />
              <Button variant="success" className="verify-button">
                Verify
              </Button>
            </Form.Group>

            <Form.Group controlId="formBookingHours">
              <Form.Label className="mt-3">Booking Hours</Form.Label>
              <Form.Control
                type="text"
                name="bookingHours"
                value={formData.bookingHours}
                onChange={handleChange}
                placeholder="Enter booking hours"
              />
            </Form.Group>

            <Form.Group controlId="formSportsOption">
              <Form.Label>Sports Option</Form.Label>
              <Form.Control
                as="select"
                name="sportsOption"
                value={formData.sportsOption}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Swimming">Swimming</option>
                <option value="Cricket">Cricket</option>
                <option value="Gym">Gym</option>
              </Form.Control>
            </Form.Group>

            <Button
              variant="success"
              type="button"
              onClick={() => handleSubmit("Guest")}
            >
              Submit
            </Button>
          </motion.div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="secondary" onClick={() => handleDownloadPDF("Guest")}>
          Download PDF
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default Guest;
