const {
  allRecipesHandler,
  recipeByIdHandler,
  createRecipeHandler,
} = require("../handlers/recipeHandler");
const { Recipe } = require("../db");

const recipesRouter = require("express").Router();

// 1
recipesRouter.get("/", allRecipesHandler);

// 2
recipesRouter.get("/:id", recipeByIdHandler);

// 3
recipesRouter.post("/", createRecipeHandler);

recipesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Recipe.destroy({ where: { id } });
  res.send(`${id} Borrado!`);
});

module.exports = recipesRouter;
