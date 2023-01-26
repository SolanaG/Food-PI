import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SORT_BY_ABC = "SORT_BY_ABC";
export const SORT_BY_HEALTH_SCORE = "SORT_BY_HEALTH_SCORE";

export const getRecipes = (queryValue) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/recipes?name=${queryValue}`
      );
      const recipes = response.data;
      dispatch({ type: GET_RECIPES, payload: recipes });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const dietsFilter = (diet) => {
  return { type: FILTER_BY_DIET, payload: diet };
};

export const sortByAbc = (order) => {
  return { type: SORT_BY_ABC, payload: order };
};

export const sortByHealthScore = (healthScore) => {
  return { type: SORT_BY_HEALTH_SCORE, payload: healthScore };
};