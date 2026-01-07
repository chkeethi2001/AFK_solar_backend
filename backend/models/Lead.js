import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    source: String, 
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
