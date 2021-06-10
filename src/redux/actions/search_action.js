import axios from "axios";
const GET_RECIPES = "GET_RECIPES";

export function getRecipes(name) {
  return function (dispatch) {
    if (!name || name.length === 0) {
      return axios(`https://old-recipes.herokuapp.com/recipes?name`).then(
        (json) => {
          dispatch({ type: GET_RECIPES, payload: json });
        }
      );
    }
    return axios(`https://old-recipes.herokuapp.com/recipes?name=${name}`).then(
      (json) => {
        dispatch({ type: GET_RECIPES, payload: json });
      }
    );
  };
}
