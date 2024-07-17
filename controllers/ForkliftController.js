import ForkliftModel from "../models/forkliftModel.js"

const getAllData = async (req, res) => {
  try {
    const allData = await ForkliftModel.find();
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const addForklift = async (req, res) => {
  try {
    const forklift = await ForkliftModel.create(req.body);
    res.status(200).json(forklift);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {getAllData, addForklift}
