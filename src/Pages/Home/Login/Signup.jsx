import React, { useState } from "react";
import axios from 'axios';
import "./Signup.css";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [role, setRole] = useState('Guest');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!showOtpForm) {
      if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        await axios.post('http://localhost:5000/api/send-otp', { email });
        alert("OTP sent to your email!");
        setOtpSent(true);
        setShowOtpForm(true);
      } catch (error) {
        console.error('Error sending OTP:', error.response ? error.response.data : error.message);
        alert("Error sending OTP: " + (error.response ? error.response.data : error.message));
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/verify-otp', { email, otp });
        if (response.status === 200) {
          await axios.post('http://localhost:5000/api/signup', { username, email, password, role });
          alert("Signup successful!");
          navigate('/'); // Navigate to home page after successful signup
        }
      } catch (error) {
        console.error('Error verifying OTP:', error.response ? error.response.data : error.message);
        alert("Error verifying OTP: " + (error.response ? error.response.data : error.message));
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-inner-container">
        <div className="left-side">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            Join Us Today!
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="signup-subheading"
          >
            Create Your Account and Get Started
          </motion.p>
        </div>

        <div className="right-side">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="signup-heading"
          >
            Signup to <span style={{ color: "#ffbe33" }}>Ars Kreedashala</span>
          </motion.h1>

          {!showOtpForm && (
            <>
              <div className="third-party-signup">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  <FaGoogle className="signup-icon" />
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
                >
                  <FaFacebookF className="signup-icon" />
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
                >
                  <FaGithub className="signup-icon" />
                </motion.div>
              </div>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
                className="or"
              >
                or use your email to register
              </motion.p>
            </>
          )}

          <form onSubmit={handleSignup}>
            {!showOtpForm ? (
              <>
                <motion.input
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
                  className="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <motion.input
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0, transition: { delay: 1 } }}
                  className="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.input
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 1.4 } }}
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <motion.input
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 1.6 } }}
                  className="password"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </>
            ) : (
              <>
                <motion.input
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 1.2 } }}
                  className="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <motion.select
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 1.8 } }}
                  className="role-dropdown"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Guest">Guest</option>
                  <option value="Cham">Cham</option>
                  <option value="Gym">Gym</option>
                </motion.select>
              </>
            )}

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 2 } }}
              className="signup-btn"
              type="submit"
            >
              {showOtpForm ? "Verify OTP and Signup" : "Sign Up"}
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 2.2 } }}
            className="login-link"
          >
            Already have an account?{" "}
            <Link to={"/login"} className="login">
              Login
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
