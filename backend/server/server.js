const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Correctly importing bcryptjs
const User = require('./models/User'); // User model
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

let otpStore = {}; // This should be replaced with a more persistent storage solution.

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://data:userdata@loginpass.9pfgj.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, password , role } = req.body;

  if (!username || !email || !password || !role) {
    console.log('Error: All fields are required');
    return res.status(400).send('All fields are required');
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Error: Email already in use');
      return res.status(400).send('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password using bcryptjs
    const newUser = new User({
      username,
      email,
      role,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User registered successfully');
    res.status(201).send('User registered');
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).send('Server error');
  }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send('All fields are required');
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('Invalid email or password');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Invalid email or password');
      }
  
      res.status(200).send('Login successful');
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).send('Server error');
    }
  });


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'studycare240@gmail.com',
    pass: 'hvuk epxn cxux wymm'
  }
});

// Function to generate a 4-digit numeric OTP
function generateNumericOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a random 4-digit number
}

// Endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateNumericOTP(); // Use the custom function to generate a 4-digit OTP

  otpStore[email] = otp;

  try {
    await transporter.sendMail({
      to: email,
      subject: 'Your OTP Code',
      text: `Your Ars kreedashala OTP code is ${otp}`
    });
    res.status(200).send({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending OTP' });
  }
});

// Endpoint to verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] === otp) {
    delete otpStore[email];
    res.status(200).send({ message: 'OTP verified successfully' });
  } else {
    res.status(400).send({ message: 'Invalid OTP' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
