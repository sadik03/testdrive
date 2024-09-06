import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import register from '../../Images/main/register1.jpg';
import './RegisterForm.css';

const RegisterForm = ({ onClose }) => {
  const [showMainModal, setShowMainModal] = useState(true);
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    navigate(path);
    setShowMainModal(false); // Close the modal after navigation
    if (onClose) onClose(); // Call the onClose prop if provided
  };

  return (
    <>
      <Modal show={showMainModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            className="lottie-container"
          >
            <img src={register} alt="Register" />
          </motion.div>

          <Button
            variant="success"
            className="register-button"
            onClick={() => navigateToPage('/member')}
          >
            Member
          </Button>

          <Button
            variant="success"
            className="register-button"
            onClick={() => navigateToPage('/coach')}
          >
            Coach
          </Button>

          <Button
            variant="success"
            className="register-button"
            onClick={() => navigateToPage('/guest')}
          >
            Guest
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterForm;
