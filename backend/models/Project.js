import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, enum: ["Residential", "Commercial"], required: true },
    description: String,
    location: String,
    savings: String,
    image: String, // image path
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
