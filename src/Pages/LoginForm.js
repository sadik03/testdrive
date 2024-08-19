import React, { useState } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import "./CSS/login.css";

const LoginForm = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);  // New state for spinner
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('guest');
  const [isSubmitting, setIsSubmitting] = useState(false);  // Loading state for form submission
  const navigate = useNavigate();

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsActive(false);
    resetForm();
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  };
  
  const handleSignIn = () => {
    setIsSignUp(false);
    setIsActive(false);
    resetForm();
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  };
  
  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setOtp('');
    setIsOtpSent(false);
  };

  const validateForm = () => {
    if (isSignUp) {
      if (!email || !password || !confirmPassword || !otp) {
        toast.error("Please fill in all required fields!");
        return false;
      }
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return false;
      }
      if (!isOtpSent) {
        toast.error("Please verify your email by sending an OTP!");
        return false;
      }
    } else {
      if (!email || !password) {
        toast.error("Please fill in all fields before signing in.");
        return false;
      }
    }
    return true;
  };

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter an email!");
      return;
    }
    try {
      setIsSendingOtp(true);
      await axios.post('http://localhost:5000/send-otp', { email });
      setIsOtpSent(true);
      toast.success("OTP sent to your email!");
    } catch (error) {
      toast.error("Failed to send OTP, please try again!");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (otp) {
      try {
        await axios.post('http://localhost:5000/verify-otp', { email, otp });
        toast.success("OTP verified successfully!");
      } catch (error) {
        toast.error("Invalid OTP");
      }
    } else {
      toast.error("Please enter the OTP sent to your email!");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      setIsSubmitting(true);
      let response;
      if (isSignUp) {
        // Sign Up
        response = await axios.post('http://localhost:5000/signup', {
          name,
          email,
          password,
          role,
        });
        toast.success(response.data.message);
      } else {
        // Sign In
        response = await axios.post('http://localhost:5000/signin', {
          email,
          password,
        });
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token); // Store token
      }
  
      // Add a delay of 3 seconds before redirecting and closing the modal
      setTimeout(() => {
        navigate('/'); // Redirect to homepage
        onClose(); // Close the login modal
      }, 6000); // 3000 milliseconds = 3 seconds
  
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <>
      <ToastContainer />
      <Modal show onHide={onClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <div className="cont_principal">
              <div className={`cont_centrar ${isActive ? 'cent_active' : ''}`}>
                <div className="cont_login">
                  <div className="cont_tabs_login">
                    <ul className="ul_tabs">
                      <li className={!isSignUp ? 'active' : ''}>
                        <a href="#" onClick={handleSignIn}>SIGN IN</a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                      <li className={isSignUp ? 'active' : ''}>
                        <a href="#up" onClick={handleSignUp}>SIGN UP</a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                    </ul>
                  </div>
                  <div className="cont_text_inputs">
                    {isSignUp && (
                      <>
                        <div className="input_with_icon">
                          <FaUser className="input_icon" />
                          <input
                            type="text"
                            className={`input_form_sign ${isActive ? 'active_inp' : ''}`}
                            placeholder="NAME"
                            name="name_us"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="input_with_icon">
                          <FaEnvelope className="input_icon" />
                          <input
                            type="text"
                            className={`input_form_sign ${isActive ? 'active_inp' : ''}`}
                            placeholder="EMAIL"
                            name="email_us"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <Button
                          variant="secondary"
                          onClick={handleSendOtp}
                          disabled={isSendingOtp || isOtpSent}
                        >
                          {isSendingOtp ? <Spinner animation="border" size="sm" /> : isOtpSent ? 'OTP Sent' : 'Send OTP'}
                        </Button>
                      </>
                    )}
                    {isSignUp && isOtpSent && (
                      <>
                        <input
                          type="text"
                          className={`input_form_sign ${isActive ? 'active_inp' : ''}`}
                          placeholder="Enter OTP"
                          name="otp_us"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <Button variant="secondary" onClick={handleVerifyOtp}>
                          Verify OTP
                        </Button>
                      </>
                    )}
                    {!isSignUp && (
                      <>
                        <div className="input_with_icon">
                          <FaEnvelope className="input_icon" />
                          <input
                            type="text"
                            className={`input_form_sign d_block ${isActive ? 'active_inp' : ''}`}
                            placeholder="EMAIL"
                            name="email_us"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="input_with_icon">
                          <FaLock className="input_icon" />
                          <input
                            type="password"
                            className={`input_form_sign d_block ${isActive ? 'active_inp' : ''}`}
                            placeholder="PASSWORD"
                            name="pass_us"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </>
                    )}
                    {isSignUp && (
                      <>
                        <div className="input_with_icon">
                          <FaLock className="input_icon" />
                          <input
                            type="password"
                            className={`input_form_sign ${isActive ? 'active_inp' : ''}`}
                            placeholder="PASSWORD"
                            name="pass_us"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="input_with_icon">
                          <FaLock className="input_icon" />
                          <input
                            type="password"
                            className={`input_form_sign ${isActive ? 'active_inp' : ''}`}
                            placeholder="CONFIRM PASSWORD"
                            name="conf_pass_us"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </>
                    )}
                    {!isSignUp && <a href="#" className={`link_forgot_pass d_block ${isActive ? '' : 'd_none'}`}>Forgot Password?</a>}
                    {!isSignUp && (
                      <Form.Group className="mb-3" controlId="formRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control
                          as="select"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="guest">Guest</option>
                          <option value="champ">Member</option>
                        </Form.Control>
                      </Form.Group>
                    )}
                    <div className="cont_btn">
                      <button className="btn_sign" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <Spinner animation="border" size="sm" /> : isSignUp ? 'SIGN UP' : 'SIGN IN'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginForm;
