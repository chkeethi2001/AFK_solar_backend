import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {
  createProject,
  getProjects,
} from "../controllers/projectController.js";
import Project from "../models/Project.js"; // Make sure the model is imported

const router = express.Router();

// 🔹 Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// 🔹 ROUTES
router.get("/", getProjects);
router.post("/", upload.single("file"), createProject);

// 🔹 DELETE PROJECT
router.delete("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Delete image file from server
    if (project.image) {
      const imagePath = path.join("uploads", path.basename(project.image));
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await project.deleteOne();
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// 🔹 UPDATE PROJECT
router.put("/:id", upload.single("file"), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const { title, type, description, location, savings } = req.body;

    project.title = title;
    project.type = type;
    project.description = description;
    project.location = location;
    project.savings = savings;

    if (req.file) {
      // Delete old image
      if (project.image) {
        const oldImage = path.join("uploads", path.basename(project.image));
        if (fs.existsSync(oldImage)) fs.unlinkSync(oldImage);
      }
      project.image = `/uploads/${req.file.filename}`;
    }

    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
