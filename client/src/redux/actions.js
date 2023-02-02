import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAIL = "GET_DETAIL";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const SORT_BY_ABC = "SORT_BY_ABC";
export const SORT_BY_HEALTH_SCORE = "SORT_BY_HEALTH_SCORE";
export const CREATE_NEW_RECIPE = "CREATE_NEW_RECIPE";

export const getRecipes = (queryValue) => {
  return async function (dispatch) {
    try {
      if (queryValue !== "pito de marte" && !queryValue) {
        alert("Por favor indica la receta que deseas buscar");
      }
      if (queryValue === "probando") queryValue = "";
      const response = await axios.get(
        `http://localhost:3001/recipes?name=${queryValue}`
      );

      const recipes = response.data;
      dispatch({ type: GET_RECIPES, payload: recipes });
    } catch (error) {
      alert(error.response.data.error);
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
      alert(error.response.data.error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/recipes/${id}`);
      const detail = response.data;
      dispatch({ type: GET_DETAIL, payload: detail });
    } catch (error) {
      alert(error.response.data.error);
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

export const createNewRecipe = (recipe) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/recipes",
        recipe
      );
      const message = response.data;
      dispatch({ type: CREATE_NEW_RECIPE, payload: message });
      alert(message);
    } catch (error) {
      alert("No pudimos crear la Receta.");
      dispatch({ type: CREATE_NEW_RECIPE, payload: error.message });
    }
  };
};
