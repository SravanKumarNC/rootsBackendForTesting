import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existUser = await UserModel.findOne({ email });
    console.log(email);
    if (existUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already Exist" });
    }
    const hasePassword = await bcryptjs.hashSync(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hasePassword,
      role: role,
    });
    await newUser.save();
    res.status(201).json({ message: "User register successfull", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ success: false, message: "Invalid credentials" });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });
    res
      .status(200)
      .json({ success: true, message: "Login SuccessFull", user, token });
  } catch (error) { 
    res.status(500).json({ message: error.message });
  }
};

const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "user Logout successfull" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const CheckUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { register, Login, Logout, CheckUser };
