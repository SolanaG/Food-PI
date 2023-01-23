const {allRecipesHandler, recipeByIdHandler, createRecipeHandler} = require('../handlers/recipeHandler')
const recipesRouter = require('express').Router();

// 1
recipesRouter.get("/", allRecipesHandler);

// 2
recipesRouter.get("/:id", recipeByIdHandler);

// 3
recipesRouter.post('/', createRecipeHandler);

module.exports = recipesRouter;