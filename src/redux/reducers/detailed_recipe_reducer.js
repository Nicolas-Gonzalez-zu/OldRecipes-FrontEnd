const initialState = {
  recipe_detailed: [],
};

export default function detailed_recipe_reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DETAILED_RECIPE":
      return {
        ...state,
        recipe_detailed: action.payload,
      };

    default:
      return state;
  }
}
