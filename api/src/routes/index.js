const { Router } = require("express");
// Importar todos los routers;
const recipesRouter = require("./recipesRoutes.js");
const dietsRouter = require("./dietsRoutes");

const router = Router();

// Configurar los routers
router.use("/recipes", recipesRouter);
router.use("/diets", dietsRouter);

module.exports = router;
