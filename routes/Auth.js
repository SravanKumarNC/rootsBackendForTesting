import express from "express";
import { register, Login, Logout, CheckUser} from "../controllers/Auth.js";
import { isUser } from "../middlewares/verifyToken.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);
AuthRoutes.post("/login", Login);
AuthRoutes.post("/logout", Logout);
AuthRoutes.get("/checkuser",isUser, CheckUser);

export default AuthRoutes;
