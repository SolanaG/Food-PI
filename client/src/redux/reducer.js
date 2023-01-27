import {
  GET_RECIPES,
  FILTER_BY_DIET,
  SORT_BY_ABC,
  SORT_BY_HEALTH_SCORE,
  GET_DIETS,
} from "./actions";

const initialState = {
  allRecipes: [],
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: [...action.payload],
        recipes: [...action.payload],
      };
    case GET_DIETS:
      return {
        ...state,
        diets: [...action.payload],
      };
    case FILTER_BY_DIET:
      const allRecipes = state.allRecipes;
      const filtered = allRecipes.filter((r) => {
        return r.diets.includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        recipes: [...filtered],
      };
    case SORT_BY_ABC:
      const sortedRecipes =
        action.payload === "1"
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: [...sortedRecipes],
      };
    case SORT_BY_HEALTH_SCORE:
      const sortedRecipesHs =
        action.payload === "1"
          ? state.recipes.sort((a, b) => {
              if (a.health_score > b.health_score) return 1;
              if (a.health_score < b.health_score) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.health_score > b.health_score) return -1;
              if (a.health_score < b.health_score) return 1;
              return 0;
            });
      return {
        ...state,
        recipes: [...sortedRecipesHs],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
