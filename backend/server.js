import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import leadRoutes from "./routes/leadRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === DATABASE ===
connectDB(); // <-- this already handles mongoose connection

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());
app.use("/api", leadRoutes)
// Static files (images, uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// === ROUTES ===
app.use("/api", authRoutes);          // auth routes
app.use("/api/leads", leadRoutes);         // leads
app.use("/api/projects", projectRoutes);   // projects
app.use("/api/blogs", blogRoutes);         // blogs (NEW)
app.use("/api",profileRoutes);
app.use("/api/contact", leadRoutes); // contact form leads
// Root est route
app.get("/", (req, res) => res.send("API running 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

// === GLOBAL ERROR HANDLER ===
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({ message: "Server crashed", error: err.message });
});
