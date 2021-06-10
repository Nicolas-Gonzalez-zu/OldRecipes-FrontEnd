const CHANGE_THEME = "CHANGE_THEME";

export function changeTheme(state) {
  return function (dispatch) {
    dispatch({ type: CHANGE_THEME, payload: state });
  };
}
