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
const apiRecipeFile = require("../../dbData");

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
    const result =
      source === "foodApi"
        ? await apiRecipeDetail(id)
        : await getRecipesById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 3

const createRecipeHandler = async (req, res) => {
  const { name, summary, healthScore, dishTypes, steps, diets, image } =
    req.body;

  try {
    if (!name || !summary || !healthScore || !dishTypes || !steps || !diets)
      throw Error("Missing data");

    await createRecipe(
      name,
      summary,
      healthScore,
      dishTypes,
      steps,
      diets,
      image
    );
    res.status(201).send("Receta creada!");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Service
const apiRecipeDetail = async (id) => {
  const url = `${BASE_URL}recipes/${id}/information/${API_AUTH}`;
  const response = await axios.get(url);
  console.log(response.data);
  const mappedRecipeDetailArr = apiRecipesMap([response.data]);

  return mappedRecipeDetailArr[0];
};

const apiRecipesMap = (array) => {
  const arr = array.map((recipe) => {
    console.log(recipe.dishTypes);
    return {
      name: recipe.title,
      health_score: recipe.healthScore,
      summary: recipe.summary,
      steps: recipe.analyzedInstructions[0]?.steps,
      created: false,
      diets: recipe.diets,
      image: recipe.image,
      dishTypes: recipe.dishTypes,
      id: recipe.id,
    };
  });

  return arr;
};
const getAllApiRecipes = async (name) => {
  const GET_ALL_URL = `recipes/complexSearch`;
  const QUERY_STR = `&addRecipeInformation=true&number=100`;
  const url = BASE_URL + GET_ALL_URL + API_AUTH + QUERY_STR;

  // const apiRecipesResults = await axios.get(url);
  // let apiRecipesArray = apiRecipesResults.data.results;
  let apiRecipesArray = apiRecipeFile.apiRecipesData.results;

  if (name)
    apiRecipesArray = apiRecipesArray.filter((recipe) =>
      recipe.title.toLowerCase().includes(name.toLowerCase())
    );
  return apiRecipesMap(apiRecipesArray);
};

module.exports = { allRecipesHandler, recipeByIdHandler, createRecipeHandler };
