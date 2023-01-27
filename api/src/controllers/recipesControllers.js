const { Recipe } = require("../db");
const { Op } = require("sequelize");
const { Diet } = require("../db");

// 1

const getAllRecipes = async (name) => {
  const query = name
    ? {
        include: Diet,
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      }
    : { include: Diet };
  const recipes = await Recipe.findAll(query);

  const formatedRecipes = recipes.map((recipe) => {
    return {
      ...recipe.dataValues,
      diets: recipe.diets?.map((diet) => {
        return diet.name;
      }),
    };
  });

  return formatedRecipes;
};

// 2

const getRecipesById = async (id) => {
  const result = await Recipe.findByPk(id, { include: Diet });

  return result;
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
