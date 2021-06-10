import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions/search_action";
import { withTheme } from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import Recipes from "../Recipes/Recipes";
import { Layout } from "./HomeCSS";
import FilterConfig from "../Recipes/Filters/FilterConfig";

const Home = withTheme(({ theme }) => {
  var recipes = useSelector((state) => state.search_reducer.recipe);
  var active_filter = useSelector(
    (state) => state.filter_reducer.active_filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getRecipes());
    }
    if (recipes.data?.error) {
      alert("We can't found a recipe with that name.");
    }
  }, [dispatch, recipes, active_filter]);
  return (
    <Layout>
      <SearchBar />
      {active_filter && <FilterConfig />}
      {!recipes.data?.error && <Recipes />}
    </Layout>
  );
});

export default Home;
