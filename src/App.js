import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Styled-components/GlobalCSS";
import { lightTheme, darkTheme } from "./Styled-components/themes/themes";

import Landing from "./Styled-components/Landing/Landing";
import Navbar from "./Styled-components/Navbar/Navbar";
import Home from "./Styled-components/Home/Home";
import DetailedRecipe from "./Styled-components/DetailedRecipe/DetailedRecipe";
import CreateRecipe from "./Styled-components/CreateRecipe/CreateRecipe";
import { useSelector } from "react-redux";

function App() {
  // eslint-disable-next-line no-unused-vars
  //Use este estado de redux para que se renderize toda la app cada vez que cambie, queda mas claro si muestro el ejemplo xd
  var theme_state = useSelector((state) => state.theme_reducer.theme_state);
  console.log(theme_state);
  return (
    <React.Fragment>
      <ThemeProvider
        theme={
          window.localStorage.getItem("theme") === "true"
            ? darkTheme
            : lightTheme
        }
      >
        <GlobalStyle />
        <BrowserRouter>
          <Route path="/">
            <Navbar />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route
            exact
            path="/recipe/:recipeId"
            render={({ match }) => (
              <DetailedRecipe recipe={match.params.recipeId} />
            )}
          />
          <Route exact path="/createRecipe">
            <CreateRecipe />
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
