import express from "express";
import cookieparser from "cookie-parser";
import tasksroute from "./routes/tasksroute.js";
import forkliftRoutes from "./routes/forkliftRoutes.js";
import connectDB from "./config/dbconection.js";
import cors from "cors";
import dotenv from "dotenv";
import AuthRoutes from "./routes/Auth.js";
import AdminRoutes from "./routes/AdminRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://roots-zcqf.onrender.com",
      "http://rootswebsite.s3-website.ap-south-1.amazonaws.com",
    ],
  })
);

// routes
app.use("/api/tasks", tasksroute);
app.use("/api/forklift", forkliftRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
