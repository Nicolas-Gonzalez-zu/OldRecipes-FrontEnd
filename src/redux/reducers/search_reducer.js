const initialState = {
  recipe: [],
};

export default function search_reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipe: action.payload,
      };

    default:
      return state;
  }
}
