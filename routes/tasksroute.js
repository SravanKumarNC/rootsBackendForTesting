import express from "express";
import taskscontroller from "../controllers/taskscontroller.js";
const router = express.Router();


//get all tasks
router.get("/", taskscontroller.getTasks);
// get tasks assigned by a one assignee

router.get("/paginatedData", taskscontroller.getPaginatedTasks);

router.get("/:assignee", taskscontroller.getTaskByAssignee);

// add new task
router.post("/", taskscontroller.addTask);

router.get("/:filter", taskscontroller.getTasksByFilter);

export default router;
