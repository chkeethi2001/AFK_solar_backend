import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, password } = req.body;

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      mobile,
     email,
      password: hashedPassword,
      role: "user" 
    });

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};


// === LOGIN ===
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login Successful",
      token,
      role: user.role,
      user: {
        id: user._id,
        firstName: user.firstName,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
};
