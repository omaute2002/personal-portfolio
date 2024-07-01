import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Skill from "./models/Skill.js";
import dotenv from "dotenv";

import crypto from "crypto";

import Education from "./models/Education.js";
import Project from "./models/Project.js";
import Experience from "./models/Experience.js";

dotenv.config();

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

const mongoURL = "mongodb+srv://omaute2002:wjRCzLSGZbkr9vEG@cluster0.wzpr85j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("Database connected"))
.catch((err) => console.log("error", err));

const conn = mongoose.connection;

// Routes to fetch data
app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/education", async (req, res) => {
  try {
    const education = await Education.find();
    res.status(200).json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/experiences", async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});


export default app;




// {
//   "version": 2,
//   "name": "personal-portfolio",
//   "builds": [
//     {
//       "src": "client/package.json",
//       "use": "@vercel/static-build",
//       "config": {
//         "distDir": "client/build"
//       }
//     },
//     {
//       "src": "server/index.js",
//       "use": "@vercel/node"
//     }
//   ],
//   "rewrites": [
//     { "source": "/api/(.*)", "destination": "/server/index.js" },
//     { "source": "/(.*)", "destination": "/client/build/$1" }
//   ]
// }
