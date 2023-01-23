const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const {
  getAllRecipes,
  getRecipesById,
  createRecipe,
} = require("../controllers/recipesControllers");
const BASE_URL = `https://api.spoonacular.com/`;
const API_AUTH = `?apiKey=${API_KEY}`;

// 1

const allRecipesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const formatedApiRecipes = await getAllApiRecipes(name);

    const dbRecipes = await getAllRecipes(name);

    res.status(200).json([...dbRecipes, ...formatedApiRecipes]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 2

const recipeByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "myDd" : "foodApi";

  try {
    const url = `${BASE_URL}recipes/${id}/information/${API_AUTH}`;
    const result =
      source === "foodApi" ? await axios.get(url) : await getRecipesById(id);

    res.status(200).json(result.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 3

const createRecipeHandler = async (req, res) => {
  const { name, summary, healthScore, steps, diets } = req.body;

  try {
    const result = await createRecipe(name, summary, healthScore, steps, diets);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Service o controller?
const apiRecipesMap = (array) =>
  array.map((recipe) => {
    return {
      title: recipe.title,
      health_score: recipe.healthScore,
      summary: recipe.summary,
      steps: recipe.analyzedInstructions,
      created: false,
    };
  });

const getAllApiRecipes = async (name) => {
  const GET_ALL_URL = `recipes/complexSearch`;
  const QUERY_STR = `&addRecipeInformation=true&number=100`;
  const url = BASE_URL + GET_ALL_URL + API_AUTH + QUERY_STR;

  const apiRecipesResults = await axios.get(url);
  let apiRecipesArray = apiRecipesResults.data.results;

  if (name)
    apiRecipesArray = apiRecipesArray.filter((recipe) =>
      recipe.title.toLowerCase().includes(name.toLowerCase())
    );
  return apiRecipesMap(apiRecipesArray);
};

module.exports = { allRecipesHandler, recipeByIdHandler, createRecipeHandler };
