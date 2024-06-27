const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');  // Import bcrypt
const User = require('../models/userModel');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
router.use(cookieParser())

//register
router.post('/signup', async (req, res) => {
  try {
    console.log("Request body:", req.body);  // Log the request body for debugging
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });  // Find one user by email
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);  // Hash the password
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in signup route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 3600000 }); // 1 hour
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Error in login route:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;
