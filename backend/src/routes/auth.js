const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { userID, firstName, lastName, email, mobile, designation, userRole, password } = req.body;
  try {
    // Check if user exists
    // let user = await User.findOne({ email });
    let user = await User.findOne({ email, mobile });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      userID,
      firstName,
      lastName,
      email,
      mobile,
      designation,
      userRole,
      password: hashedPassword,
    });

    await user.save();

    // Generate JWT
    const token = jwt.sign({ id: user._id, role: user.userRole }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token, user: { userID, email, userRole } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, role: user.userRole }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user: { userID: user.userID, email, userRole: user.userRole } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;