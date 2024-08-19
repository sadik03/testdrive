import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { jsPDF } from "jspdf";

import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Coach = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    aadharNo: "",
    experience: "",
    college: "",
    sports: "",
    achievement: "",
    idMark: "",
    bloodGroup: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const {
      name,
      age,
      aadharNo,
      experience,
      college,
      sports,
      achievement,
      idMark,
      bloodGroup,
      address,
    } = formData;

    return (
      name &&
      age &&
      aadharNo &&
      experience &&
      college &&
      sports &&
      achievement &&
      idMark &&
      bloodGroup &&
      address
    );
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
      doc.text(`Experience: ${formData.experience}`, 10, 50);
      doc.text(`College: ${formData.college}`, 10, 60);
      doc.text(`Sports: ${formData.sports}`, 10, 70);
      doc.text(`Achievement: ${formData.achievement}`, 10, 80);
      doc.text(`Identification Mark: ${formData.idMark}`, 10, 90);
      doc.text(`Blood Group: ${formData.bloodGroup}`, 10, 100);
      doc.text(`Address: ${formData.address}`, 10, 110);
      doc.save(`${userType}_Registration.pdf`);
    } else {
      toast.error("Please fill in all fields before downloading the PDF!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Coach Registration</Modal.Title>
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

            <Form.Group controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Enter years of experience"
              />
            </Form.Group>

            <Form.Group controlId="formCollege">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Enter college name"
              />
            </Form.Group>

            <Form.Group controlId="formSports">
              <Form.Label>Sports</Form.Label>
              <Form.Control
                type="text"
                name="sports"
                value={formData.sports}
                onChange={handleChange}
                placeholder="Enter sports"
              />
            </Form.Group>

            <Form.Group controlId="formAchievement">
              <Form.Label>Achievement</Form.Label>
              <Form.Control
                type="text"
                name="achievement"
                value={formData.achievement}
                onChange={handleChange}
                placeholder="Enter your achievements"
              />
            </Form.Group>

            <Form.Group controlId="formIdMark">
              <Form.Label>Identification Mark</Form.Label>
              <Form.Control
                type="text"
                name="idMark"
                value={formData.idMark}
                onChange={handleChange}
                placeholder="Enter identification mark"
              />
            </Form.Group>

            <Form.Group controlId="formBloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                placeholder="Enter blood group"
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

            <Button
              variant="primary"
              type="button"
              onClick={() => handleSubmit("Coach")}
              className="mt-3"
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
        <Button variant="secondary" onClick={() => handleDownloadPDF("Coach")}>
          Download PDF
        </Button>
      </Modal.Footer>
      <ToastContainer />
    </Modal>
  );
};

export default Coach;
