import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './CSS/CoachAdmissionForm.css';

const CoachAdmissionForm = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Coach Admission Form submitted', { fullName, email, phone, experience, specialization, photo });
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Coach Admission</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter full name" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter phone number" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExperience">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Enter years of experience" 
              value={experience} 
              onChange={(e) => setExperience(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter specialization" 
              value={specialization} 
              onChange={(e) => setSpecialization(e.target.value)} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoto">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control 
              type="file" 
              onChange={handlePhotoUpload} 
              required 
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CoachAdmissionForm;
