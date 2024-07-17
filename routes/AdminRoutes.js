import express from "express";
import { GetUser, DeleteUser } from "../controllers/Admin.js";
import { isAdmin } from "../middlewares/verifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/getuser", GetUser);
AdminRoutes.delete("/delete/:id", isAdmin, DeleteUser);

export default AdminRoutes;
