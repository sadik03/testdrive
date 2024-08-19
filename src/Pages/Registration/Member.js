import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Member = ({ show, handleClose }) => {
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

  const handleSubmit = (userType) => {
    if (validateForm()) {
      toast.success(`${userType} registration successful!`);
    } else {
      toast.error("Please fill in all fields before submitting!");
    }
  };

  const handleDownloadPDF = (userType) => {
    if (validateForm()) {
      const doc = new jsPDF();
      doc.text(`Registration Details for ${userType}`, 10, 10);
      doc.text(`Name: ${formData.name}`, 10, 20);
      doc.text(`Age: ${formData.age}`, 10, 30);
      doc.text(`Aadhar No: ${formData.aadharNo}`, 10, 40);
      doc.text(`Address: ${formData.address}`, 10, 50);
      doc.text(`Phone: ${formData.phone}`, 10, 60);
      doc.save(`${userType}_Registration.pdf`);
    } else {
      toast.error("Please fill in all fields before downloading the PDF!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Member Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="form-fields"
          >
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter your age"
              />
            </Form.Group>

            <Form.Group controlId="formAadharNo">
              <Form.Label>Aadhar No</Form.Label>
              <Form.Control
                type="text"
                name="aadharNo"
                value={formData.aadharNo}
                onChange={handleChange}
                placeholder="Enter your Aadhar number"
              />
            </Form.Group>

            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
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
              <Button variant="success" className="mt-1" onClick={handleChange}>
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
              <Button variant="success" className="mt-2" onClick={handleChange}>
                Verify
              </Button>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              className="mt-3"
              onClick={() => handleSubmit("Champ")}
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
        <Button variant="secondary" onClick={() => handleDownloadPDF("Champ")}>
          Download PDF
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default Member;
