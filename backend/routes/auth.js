import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

/* ------------------ REGISTER ------------------ */
router.post("/register", async (req, res) => {
  const { firstName, lastName, mobile, email, password } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      mobile,
      email,
      password: hashedPassword,
      role: "user",
      avatar: ""
    });

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        mobile: newUser.mobile,
        email: newUser.email
      }
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

/* ------------------ LOGIN ------------------ */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        avatar: user.avatar,
        role: user.role
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", error });
  }
});
export default router;
