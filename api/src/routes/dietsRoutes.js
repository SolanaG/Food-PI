
const { createDietHandler, getAllDietsHandler } = require('../handlers/dietHandler');
const dietsRouter = require('express').Router();

dietsRouter.post('/', createDietHandler);

dietsRouter.get('/', getAllDietsHandler);

module.exports = dietsRouter;