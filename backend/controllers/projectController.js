import Project from "../models/Project.js";

// CREATE PROJECT
export const createProject = async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to add project" });
  }
};

// GET ALL PROJECTS
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};
