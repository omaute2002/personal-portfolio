import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Skill from "./models/Skill.js";
import dotenv from "dotenv";
import multer from "multer";
import crypto from "crypto";
import path from "path";
import { GridFsStorage } from "multer-gridfs-storage";
import Grid from "gridfs-stream";

import Education from "./models/Education.js";
import Project from "./models/Project.js";
import Experience from "./models/Experience.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
//   console.log("GFS:", gfs);
  gfs.collection("uploads");

});

const storage = new GridFsStorage({
  url: mongoURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// Handle uploads
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    res.json({ file: req.file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file" });
  }
});

// Routes to fetch data
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/education", async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Backend - Node.js (Express)
app.get("/files/:filename", (req, res) => {
  if (!gfs) {
    return res.status(500).json({
      err: "GridFS stream is not initialized",
    });
  }

  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (err) {
      console.error("Error finding file:", err);
      return res.status(500).json({
        err: "Internal server error",
      });
    }
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }

    const readstream = gfs.createReadStream(file.filename);
    console.log("File found, streaming", file.filename);
    readstream.on("error", (err) => {
      console.error("Error reading stream:", err);
      res.status(500).json({
        err: "Error reading file stream",
      });
    });

    readstream.pipe(res);
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
