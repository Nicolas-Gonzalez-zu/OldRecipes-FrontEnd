const initialState = {
  dish_types: [],
};

export default function create_recipe_reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DISH_TYPES":
      return { ...state, dish_types: action.payload };
    default:
      return state;
  }
}
