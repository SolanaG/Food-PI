import style from "./RecipesContainer.module.css";
import { useSelector } from "react-redux";
import RecipeCard from "../Recipe/RecipeCard";

const RecipesContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  console.log("RECIPES::::::", recipes);
  return (
    <div>
      {recipes[0]?.length > 0 ? (
        <div className={style.container}>
          {recipes[0].map((recipe, i) => {
            console.log("mapping recipe", i, recipe);
            return (
              <RecipeCard
                key={i}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                summary={recipe.summary}
              />
            );
          })}
        </div>
      ) : (
        <p>Cargando Recetas...</p>
      )}
    </div>
  );
};

export default RecipesContainer;
