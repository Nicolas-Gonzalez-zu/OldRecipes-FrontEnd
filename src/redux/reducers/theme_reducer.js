const initialState = {
  theme_state: true,
};
const CHANGE_THEME = "CHANGE_THEME";
export default function theme_reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme_state: action.payload,
      };

    default:
      return state;
  }
}
