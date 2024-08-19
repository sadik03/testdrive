import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CSS/login.css";

const LoginForm = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("guest");
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
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhoneNumber("");
    setOtp("");
    setIsOtpSent(false);
  };

  const validateForm = () => {
    if (isSignUp) {
      if (!email || !password || !confirmPassword || !phoneNumber || !otp) {
        toast.error("Please fill in all required fields!");
        return false;
      }
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return false;
      }
    } else {
      if (!email || !password || !phoneNumber) {
        toast.error("Please fill in all fields before signing in.");
        return false;
      }
    }
    return true;
  };

  const handleSendOtp = () => {
    if (phoneNumber) {
      setIsOtpSent(true);
      console.log("OTP sent to", phoneNumber);
    } else {
      toast.error("Please enter a phone number!");
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      console.log("OTP verified");
      toast.success("OTP verified successfully!");
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(email, password, role);

    // Mock login success
    toast.success(isSignUp ? "Sign up successful!" : "Sign in successful!");
    navigate("/create-profile");

    // Reset form fields
    resetForm();
  };

  return (
    <>
      <ToastContainer />
      <Modal show onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? "Sign Up" : "Sign In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <div className="cont_principal">
              <div className={`cont_centrar ${isActive ? "cent_active" : ""}`}>
                <div className="cont_login">
                  <div className="cont_tabs_login">
                    <ul className="ul_tabs">
                      <li className={!isSignUp ? "active" : ""}>
                        <a href="#" onClick={handleSignIn}>
                          SIGN IN
                        </a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                      <li className={isSignUp ? "active" : ""}>
                        <a href="#up" onClick={handleSignUp}>
                          SIGN UP
                        </a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                    </ul>
                  </div>
                  <div className="cont_text_inputs">
                    {isSignUp && (
                      <input
                        type="text"
                        className={`input_form_sign ${
                          isActive ? "active_inp" : ""
                        }`}
                        placeholder="NAME"
                        name="name_us"
                      />
                    )}
                    <input
                      type="text"
                      className={`input_form_sign d_block ${
                        isActive ? "active_inp" : ""
                      }`}
                      placeholder="EMAIL"
                      name="email_us"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      className={`input_form_sign d_block ${
                        isActive ? "active_inp" : ""
                      }`}
                      placeholder="PASSWORD"
                      name="pass_us"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && (
                      <input
                        type="password"
                        className={`input_form_sign ${
                          isActive ? "active_inp" : ""
                        }`}
                        placeholder="CONFIRM PASSWORD"
                        name="conf_pass_us"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    )}

                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                      <Button variant="secondary" onClick={handleSendOtp}>
                        Send OTP
                      </Button>
                    </Form.Group>

                    {isOtpSent && (
                      <Form.Group className="mb-3" controlId="formOtp">
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                        <Button variant="secondary" onClick={handleVerifyOtp}>
                          Verify OTP
                        </Button>
                      </Form.Group>
                    )}

                    {!isSignUp && (
                      <a
                        href="#"
                        className={`link_forgot_pass d_block ${
                          isActive ? "" : "d_none"
                        }`}
                      >
                        Forgot Password?
                      </a>
                    )}

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

                    <div className="cont_btn">
                      <button className="btn_sign" type="submit">
                        {isSignUp ? "SIGN UP" : "SIGN IN"}
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
