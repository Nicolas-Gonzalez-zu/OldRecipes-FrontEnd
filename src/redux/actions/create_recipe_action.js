import axios from "axios";
const GET_DISH_TYPES = "GET_DISH_TYPES";

export function getDishTypes() {
  return function (dispatch) {
    return axios(`http://localhost:3001/type/dish`).then((json) => {
      dispatch({ type: GET_DISH_TYPES, payload: json });
    });
  };
}
