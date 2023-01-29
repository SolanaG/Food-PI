import style from "./RecipesContainer.module.css";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Link } from "react-router-dom";
import { useState } from "react";
const RecipesContainer = () => {
  const recipes = useSelector((state) => state.recipes);

  const [page, setPage] = useState(1);
  const perPage = 9;

  const lastIndex = page * perPage;
  const firstIndex = lastIndex - perPage;
  const paginatedRecipes = recipes.slice(firstIndex, lastIndex);

  const handleNextPage = () => {
    if (lastIndex === recipes.length || lastIndex > recipes.length) {
      return;
    }
    setPage(page + 1);
  };
  const handlePreviousPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div>
      {recipes?.length > 0 ? (
        <div className={style.container}>
          {paginatedRecipes?.map((recipe, i) => {
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
      <div className={style.buttonPag}>
        <button onClick={handlePreviousPage}> Anterior </button>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
      <div>
        <p>
          Pagina {page}. Desde {firstIndex} hasta{" "}
          {lastIndex > recipes.length ? recipes.length : lastIndex} de{" "}
          {recipes.length} recetas.
        </p>
      </div>
    </div>
  );
};

export default RecipesContainer;
