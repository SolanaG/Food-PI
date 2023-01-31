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

  return {
    ...result.dataValues,
    diets: result.diets?.map((diet) => {
      return diet.name;
    }),
  };
};

// 3

const createRecipe = async (
  name,
  summary,
  healthScore,
  dishTypes,
  steps,
  diets,
  image
) => {
  const result = await Recipe.create({
    name,
    summary,
    health_score: healthScore,
    dishTypes,
    image,
    steps,
    created: true,
  });
  result.setDiets(diets);
};

module.exports = { getAllRecipes, getRecipesById, createRecipe };
