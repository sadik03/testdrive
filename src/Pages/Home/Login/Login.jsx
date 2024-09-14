import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios"; // Import axios for making API requests

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
  
      // Assuming the response contains user information
      const user = response.data;
  
      // Save user info to localStorage
      localStorage.setItem("user", JSON.stringify(user));
  
      // Set success message or handle redirection
      setSuccess("Login successful!");
  
      // Redirect or update state accordingly
      setTimeout(() => {
        window.location.href = '/';  // Redirect to home page
      }, 1500);
    } catch (err) {
      setError(err.response ? err.response.data : "Error logging in");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="left-side">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            Welcome Back!
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="login-subheading"
          >
            Connecting You with Your Account Safely
          </motion.p>
        </div>

        <div className="right-side">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="login-heading"
          >
            Login to <span style={{ color: "#ffbe33" }}>Ars Kreedashala</span>
          </motion.h1>

          {/* Display error or success messages */}
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleLogin}>
            <motion.input
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
              className="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.input
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 1 } }}
              className="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 1.4 } }}
              className="login-btn"
              type="submit"
            >
              Login
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 1.6 } }}
            className="signup-link"
          >
            Don't have an account?{" "}
            <Link to={"/signup"} className="signup">
              Signup
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Login;
