import axios from "axios";
const GET_DETAILED_RECIPE = "GET_DETAILED_RECIPE";

export function getRecipesDetailed(recipe) {
  return function (dispatch) {
    return axios(`https://old-recipes.herokuapp.com/recipes/${recipe}`).then(
      (json) => {
        dispatch({ type: GET_DETAILED_RECIPE, payload: json.data });
      }
    );
  };
}
