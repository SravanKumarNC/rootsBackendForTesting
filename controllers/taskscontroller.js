import Tasks from "../models/tasks.js";
import getFilterCriteria from '../utils/DateUtilFunctions.js'
// const Tasks = require("../models/tasks");
// const { getFilterCriteria } = require("../utils/DateUtilFunctions");

const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPaginatedTasks = async (req, res) => {
  const PAGE_SIZE = 10;
  const page = parseInt(req.query.page || "0");
  const total = await Tasks.countDocuments({});
  const tasks = await Tasks.find({})
    .sort({ _id: -1 })
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    tasks,
  });
};

const getTaskByAssignee = async (req, res) => {
  try {
    const { assignee } = req.params;
    const tasks = await Tasks.find({ assignee: assignee });
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No Tasks Found" });
    }
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasksByFilter = async (req, res) => {
  const filter = req.params.filter || "ALL";
  const filterCriteria = getFilterCriteria(filter);

  try {
    const tasks = await Tasks.find(filterCriteria);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

export default {
  getTasks,
  getPaginatedTasks,
  getTaskByAssignee,
  addTask,
  getTasksByFilter,
};
