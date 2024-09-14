const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    // enum: ['Guest', 'Cham', 'Gym'], // Defines the allowed values for role
    // default: 'Guest' // Default role if none is specified
  },
});

module.exports = mongoose.model('User', userSchema);
