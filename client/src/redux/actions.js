import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAIL = "GET_DETAIL";
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

export const getDiets = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/diets");
      const diets = response.data;
      dispatch({ type: GET_DIETS, payload: diets });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      console.log("action::", id);
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      const detail = response.data;
      dispatch({ type: GET_DETAIL, payload: detail });
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
