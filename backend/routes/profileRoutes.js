import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import User from "../models/User.js";

const router = express.Router();

// MULTER STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });


// UPDATE AVATAR
router.put("/update/:id", upload.single("avatar"), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Delete old avatar if exists
    if (user.avatar) {
      const oldPath = path.join("uploads", user.avatar);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    // Save new filename
    user.avatar = req.file.filename;

    await user.save();

    res.json({
      message: "Avatar updated successfully",
      user,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
