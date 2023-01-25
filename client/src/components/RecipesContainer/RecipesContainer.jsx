import style from "./RecipesContainer.module.css";
import { useSelector } from "react-redux";
import RecipeCard from "../Recipe/RecipeCard";

const RecipesContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div>
      {recipes?.length > 0 ? (
        <div className={style.container}>
          {recipes?.map((recipe, i) => {
            return (
              <RecipeCard
                key={i}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                diets={recipe.diets}
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
