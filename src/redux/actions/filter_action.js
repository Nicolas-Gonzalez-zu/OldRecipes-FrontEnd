import axios from "axios";
const GET_DIETS = "GET_DIETS";
const ADD_FILTER_DIET = "ADD_FILTER_DIET";
const REMOVE_FILTER_DIET = "REMOVE_FILTER_DIET";
const ORDER_SCORE = "ORDER_SCORE";
const ORDER_NAME = "ORDER_NAME";
const ACTIVE_FILTER = "ACTIVE_FILTER";

export function getFilters() {
  return function (dispatch) {
    return axios(`https://old-recipes.herokuapp.com/type`).then((json) => {
      dispatch({ type: GET_DIETS, payload: json });
    });
  };
}
export function addFilter(name) {
  return function (dispatch) {
    dispatch({ type: ADD_FILTER_DIET, payload: name });
  };
}

export function removeFilter(name) {
  return function (dispatch) {
    dispatch({ type: REMOVE_FILTER_DIET, payload: name });
  };
}

export function orderScore(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_SCORE, payload: order });
  };
}

export function orderName(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_NAME, payload: order });
  };
}

export function activeFilters(active) {
  return function (dispatch) {
    dispatch({ type: ACTIVE_FILTER, payload: active });
  };
}
