const express = require("express");
const router = express.Router();
const {
  getTasks,
  getPaginatedTasks,
  getTaskByAssignee,
  addTask,
  getTasksByFilter,
} = require("../controllers/taskscontroller.js");

//get all tasks
router.get("/", getTasks);
// get tasks assigned by a one assignee

router.get("/paginatedData", getPaginatedTasks);

router.get("/:assignee", getTaskByAssignee);

// add new task
router.post("/", addTask);

router.get("/:filter", getTasksByFilter);

module.exports = router;
