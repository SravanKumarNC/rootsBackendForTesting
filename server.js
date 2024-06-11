const express = require("express");
const mongoose = require("mongoose");
const Tasks = require("./models/tasks.js");
const tasksroute = require("./routes/tasksroute.js");
const app = express();
const connectDB = require("./config/dbconection.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://roots-zcqf.onrender.com",
      "http://rootswebsite.s3-website.ap-south-1.amazonaws.com",
    ],
  })
);

// routes
app.use("/api/tasks", tasksroute);

app.get("/", (req, res) => {
  res.send("server is up and running");
});

connectDB();
const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
