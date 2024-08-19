import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const ChampAdmissionForm = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log('Champ Admission Form submitted', { fullName, email, phone, age, photo });
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Champ Admission</Modal.Title>
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

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Enter age" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
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

export default ChampAdmissionForm;
