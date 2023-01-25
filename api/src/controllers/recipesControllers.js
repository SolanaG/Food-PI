const { Recipe } = require("../db");
const { Op } = require("sequelize");
const { Diet } = require("../db");

// 1

const getAllRecipes = async (name) => {
  const query = name
    ? {
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: Diet,
      }
    : {};
  console.log(query);
  return Recipe.findAll(query);
};

// 2

const getRecipesById = async (id) => {
  const result = await Recipe.findByPk(id, { include: Diet });

  return { data: result };
};

// 3

const createRecipe = async (name, summary, healthScore, steps, diets) => {
  const result = await Recipe.create({
    name,
    summary,
    healthScore,
    steps,
    created: true,
  });
  result.setDiets(diets);

  return result;
};

module.exports = { getAllRecipes, getRecipesById, createRecipe };
