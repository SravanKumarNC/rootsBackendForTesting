import UserModel from "../models/user.js";

const GetUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const GetUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = UserModel.findById(userId);
    if (!user) return res.status(401).json({ message: "user not found" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const checkAdmin = await UserModel.findById(userId);
    if (checkAdmin.role === "admin") {
      return res
        .status(409)
        .json({ message: "you can not delete your account" });
    }
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) return res.status(401).json({ message: "user not found" });
    res.status(200).json({ message: "user deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { GetUser, GetUserById, DeleteUser };
