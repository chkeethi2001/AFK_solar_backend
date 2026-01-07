import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js"; // make sure this path points to your User model

// Replace with your MongoDB URI
const MONGO_URI = "mongodb+srv://chkeethi2001_db_user:Keerthi123@cluster0.axyk08m.mongodb.net/afk_ecogrid"; // <-- change 'your-db-name' to your DB

const createAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "abraradmin246@gmail.com" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      return process.exit();
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("admin@246", 10);

    // Create the admin user
    const adminUser = await User.create({
      firstName: "abrar",
      lastName: "khan",
      mobile: "9963375533",
      email: "abraradmin246@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully:", adminUser);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
