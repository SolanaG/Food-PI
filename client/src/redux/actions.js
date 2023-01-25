import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = (queryValue) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/recipes?name=`);

      const recipes = response.data;
      dispatch({ type: GET_RECIPES, payload: recipes });
    } catch (error) {
      alert(error.message);
    }
  };
};
