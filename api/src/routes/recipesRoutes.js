const {
  allRecipesHandler,
  recipeByIdHandler,
  createRecipeHandler,
  deleteRecipeHandler,
  editRecipeHandler,
} = require("../handlers/recipeHandler");
const { Recipe } = require("../db");

const recipesRouter = require("express").Router();

// 1
recipesRouter.get("/", allRecipesHandler);

// 2
recipesRouter.get("/:id", recipeByIdHandler);

// 3
recipesRouter.post("/", createRecipeHandler);

// 4
recipesRouter.delete("/:id", deleteRecipeHandler);

recipesRouter.put("/:id", editRecipeHandler);

module.exports = recipesRouter;
