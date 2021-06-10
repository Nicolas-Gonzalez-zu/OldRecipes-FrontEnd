import { combineReducers } from "redux";
import search_reducer from "./reducers/search_reducer";
import filter_reducer from "./reducers/filter_reducer";
import detailed_recipe_reducer from "./reducers/detailed_recipe_reducer";
import create_recipe_reducer from "./reducers/create_recipe_reducer";
import theme_reducer from "./reducers/theme_reducer";
const rootReducer = combineReducers({
  search_reducer,
  filter_reducer,
  detailed_recipe_reducer,
  create_recipe_reducer,
  theme_reducer,
});

export default rootReducer;
