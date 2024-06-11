const mongoose = require("mongoose");

const TasksSchema = mongoose.Schema(
  {
    tasks: {
      type: String,
      required: true,
    },
    binLocation: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    assignee: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", TasksSchema);
module.exports = Tasks;
