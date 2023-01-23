const { createDiet, getDiets } = require("../controllers/dietsControllers");

const createDietHandler = async (req, res) => {
  try {
    const result = await createDiet(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllDietsHandler = async (req, res) => {
  try {
    const result = await getDiets();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllDietsHandler, createDietHandler };
