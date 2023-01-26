import {
  GET_RECIPES,
  FILTER_BY_DIET,
  SORT_BY_ABC,
  SORT_BY_HEALTH_SCORE,
  GET_DIETS,
} from "./actions";

const initialState = {
  recipes: [],
  diets: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case GET_DIETS:
      return {
        ...state,
        diets: [...action.payload],
      };
    case FILTER_BY_DIET:
      const allRecipes = state.recipes;
      const filtered = allRecipes.filter((r) => {
        console.log("filterss::", r.diets);
        // if (typeof r.diets[0] === "string") {
        return (
          r.diets.includes(action.payload.toLowerCase()) ||
          r.diets.includes(action.payload)
        );
        // } else {
        //   return r.diets
        //     .map((s) => s.name)
        //     .includes(action.payload.toLowerCase());
        // }
      });
      return {
        ...state,
        recipes: filtered,
      };
    case SORT_BY_ABC:
      const sortedRecipes =
        action.payload === "1"
          ? state.recipes.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      console.log("sorteddddddddd::::", sortedRecipes);
      return {
        ...state,
        recipes: sortedRecipes,
      };
    case SORT_BY_HEALTH_SCORE:
      return {};

    default:
      return { ...state };
  }
};

export default rootReducer;
