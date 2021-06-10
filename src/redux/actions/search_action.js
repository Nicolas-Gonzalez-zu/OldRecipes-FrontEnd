import axios from "axios";
const GET_RECIPES = "GET_RECIPES";

export function getRecipes(name) {
  return function (dispatch) {
    if (!name || name.length === 0) {
      return axios(`http://localhost:3001/recipes?name`).then((json) => {
        dispatch({ type: GET_RECIPES, payload: json });
      });
    }
    return axios(`http://localhost:3001/recipes?name=${name}`).then((json) => {
      dispatch({ type: GET_RECIPES, payload: json });
    });
  };
}
