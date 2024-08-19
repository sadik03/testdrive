const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://data:userdata@loginpass.9pfgj.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));

// Define User schema and model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneNumber: String,
  role: { type: String, default: 'guest' },
});

const User = mongoose.model('User', UserSchema);

// Sign Up route
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phoneNumber, role } = req.body;
    const user = new User({ name, email, password, phoneNumber, role });
    await user.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error });
  }
});

// Sign In route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send({ message: 'User logged in successfully!' });
    } else {
      res.status(400).send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error', error });
  }
});

// Temporary store for OTPs
const otpStore = {};

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'studycare240@gmail.com', // Replace with your email
    pass: 'eygs lcly clyw esgf ',     // Replace with your email password
  },
});

// Route to send OTP
app.post('/send-otp', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send('Email is required');

  const otp = crypto.randomInt(100000, 999999).toString();

  const mailOptions = {
    from: 'studycare240@gmail.com', // Replace with your email
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending OTP', error);
      return res.status(500).send('Failed to send OTP');
    }

    // Store OTP with a timestamp
    otpStore[email] = { otp, expires: Date.now() + 300000 }; // OTP valid for 5 minutes

    res.status(200).send('OTP sent successfully');
  });
});

// Route to verify OTP
app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).send('Email and OTP are required');

  const storedOtp = otpStore[email];

  if (!storedOtp) {
    return res.status(400).send('No OTP found for this email');
  }

  if (Date.now() > storedOtp.expires) {
    return res.status(400).send('OTP expired');
  }

  if (storedOtp.otp !== otp) {
    return res.status(400).send('Invalid OTP');
  }

  // OTP is valid, you can proceed with signup
  delete otpStore[email]; // Clear OTP after successful verification
  res.status(200).send('OTP verified successfully');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
