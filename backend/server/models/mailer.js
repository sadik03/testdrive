// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const sendOtpEmail = require("../mailer");
// const router = express.Router();

// // Signup Route
// router.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

//     user = new User({
//       username,
//       email,
//       password: hashedPassword,
//       otp,
//     });

//     await user.save();

//     await sendOtpEmail(email, otp);
//     res.json({ msg: "OTP sent to your email" });
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// });

// // OTP Verification Route
// router.post("/verify-otp", async (req, res) => {
//   const { email, otp } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user || user.otp !== otp) {
//       return res.status(400).json({ msg: "Invalid OTP" });
//     }

//     user.isVerified = true;
//     user.otp = null;
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.json({ token, msg: "Account verified" });
//   } catch (err) {
//     res.status(500).send("Server error");
//   }
// });


// // Login Route
// router.post("/login", async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
//       if (!user) return res.status(400).json({ msg: "User not found" });
  
//       if (!user.isVerified) {
//         return res.status(400).json({ msg: "Please verify your account first" });
//       }
  
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "1h",
//       });
  
//       res.json({ token });
//     } catch (err) {
//       res.status(500).send("Server error");
//     }
//   });
  
