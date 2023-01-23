const {Diet} = require("../db")

const createDiet = (diet) => {
  return Diet.create(diet);
};

const getDiets = () => {
   return Diet.findAll();
};

module.exports =  { createDiet, getDiets } 