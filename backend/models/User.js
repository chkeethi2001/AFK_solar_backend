import mongoose from "mongoose";

// Example: User.js
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  email: { type: String, required: true, unique: true },
  password: String,
  avatar: { type: String, default: "" },
  role: { type: String, default: "user" },
});

export default mongoose.model("User", userSchema);
