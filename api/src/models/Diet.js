const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "diet",
    {
      name: {
        type: DataTypes.ENUM,
        values: [
          "Vegan",
          "Vegetarian",
          "Gluten Free",
          "Whole30",
          "Ketogenic",
          "Lacto Vegetarian",
          "Primal",
          "Low FODMAP",
          "Pescetarian",
          "Paleo",
          "Ovo Vegetarian",
          "Lacto Ovo Vegetarian",
        ],
      },
    },
    { timestamps: false }
  );
};
