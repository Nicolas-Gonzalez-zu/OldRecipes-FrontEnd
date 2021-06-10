import React, { useState } from "react";
import { withTheme } from "styled-components";
import { Form, Label, Layout, Input, Button } from "./SearchBarCSS";

import img from "./img/SearchBar.jpg";

import { getRecipes } from "../../redux/actions/search_action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Filters from "../Recipes/Filters/Filters";

const SearchBar = withTheme(({ theme, getRecipes }) => {
  const [recipe, setRecipe] = useState("");

  return (
    <React.Fragment>
      <Layout backgroundImage={img}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            getRecipes(recipe);
          }}
        >
          <Label>Find your recipe</Label>
          <Input
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Form>
        <Filters />
      </Layout>
    </React.Fragment>
  );
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getRecipes }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
