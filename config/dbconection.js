const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://controlone:controlone@dashboard.bbzfyk6.mongodb.net/?retryWrites=true&w=majority&appName=dashboard"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
