import style from "./RecipesContainer.module.css";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";

const RecipesContainer = () => {
  const recipes = useSelector((state) => state.recipes);
  return (
    <div>
      {recipes?.length > 0 ? (
        <div className={style.container}>
          {recipes?.map((recipe, i) => {
            console.log(recipes);
            const detailRoute = `/detail/${recipe.id}`;
            return (
              <Link className={style.link} to={detailRoute} key={i}>
                <RecipeCard
                  key={i}
                  id={recipe.id}
                  image={recipe.image}
                  name={recipe.name}
                  diets={recipe.diets}
                  summary={recipe.summary}
                  healthScore={recipe.health_score}
                />
              </Link>
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
