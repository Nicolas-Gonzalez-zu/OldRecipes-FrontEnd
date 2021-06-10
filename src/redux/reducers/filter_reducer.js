const initialState = {
  diet_type: [],
  diet_filter: [],
  order_score: "None",
  order_name: "None",
  active_filter: false,
};

export default function filter_reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DIETS":
      return {
        ...state,
        diet_type: action.payload,
      };

    case "ADD_FILTER_DIET":
      return {
        ...state,
        diet_filter: [...state.diet_filter, action.payload],
      };

    case "REMOVE_FILTER_DIET":
      return {
        ...state,
        diet_filter: state.diet_filter.filter(
          (elem) => elem !== action.payload
        ),
      };
    case "ORDER_NAME":
      return {
        ...state,
        order_name: action.payload,
      };

    case "ORDER_SCORE":
      return {
        ...state,
        order_score: action.payload,
      };

    case "ACTIVE_FILTER":
      return {
        ...state,
        active_filter: action.payload,
      };

    default:
      return state;
  }
}
