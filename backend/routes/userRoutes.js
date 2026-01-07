import express from "express";
import upload from "../middleware/upload.js";
import User from "../models/User.js";

const router = express.Router();

// Update ONLY avatar
router.put("/update-avatar/:id", upload.single("avatar"), async (req, res) => {
  try {
    const avatarPath = req.file ? `/uploads/${req.file.filename}` : null;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { avatar: avatarPath },
      { new: true }
    );

    res.json({ message: "Avatar updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

export default router;
