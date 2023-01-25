import { GET_RECIPES } from "./actions";

const initialState = {
  recipes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    // case DELETE_CHARACTER:
    //   return {
    //     ...state,
    //     myFavorites: state.recipes.filter((char) => {
    //       return char.id !== action.payload;
    //     }),
    //   };
    default:
      return { ...state };
  }
};

export default rootReducer;
