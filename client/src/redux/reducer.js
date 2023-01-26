import {
  GET_RECIPES,
  FILTER_BY_DIET,
  SORT_BY_ABC,
  SORT_BY_HEALTH_SCORE,
} from "./actions";

const initialState = {
  recipes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case FILTER_BY_DIET:
      return {};
    case SORT_BY_ABC:
      console.log("action:::", action.payload);
      return {
        ...state,
        recipes: [
          ...state.recipes.sort((a, b) =>
            action.payload == 1 ? a.name > b.name : a.name < b.name
          ),
        ],
      };
    case SORT_BY_HEALTH_SCORE:
      return {};

    default:
      return { ...state };
  }
};

export default rootReducer;
