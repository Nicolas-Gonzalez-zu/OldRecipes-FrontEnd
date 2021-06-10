import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { changeTheme } from "../../redux/actions/theme_action";

import { withTheme } from "styled-components";
import { Layout, A, Button, P, NavLinkStyled } from "./NavbarCSS";

export default withTheme(({ theme }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  var theme_state = useSelector((state) => state.theme_reducer.theme_state);

  const setLocalStorage = () => {
    try {
      dispatch(changeTheme(!theme_state));
      window.localStorage.removeItem("theme");
      window.localStorage.setItem("theme", theme_state);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {pathname.length === 1 ? (
        <>
          <Layout background={theme.navbarTextColor} color={theme.navbarColor}>
            <P to="/" color={theme.navbarColor}>
              OldRecipes
            </P>
            <A
              color={theme.navbarColor}
              onClick={() => setLocalStorage()}
              background={theme.navbarTextColor}
            >
              Change Theme
            </A>
            <A href="#FAQ" color={theme.navbarColor}>
              FAQ
            </A>
            <A href="#AboutUs" color={theme.navbarColor}>
              About Us
            </A>
            <A href="#ContactUs" color={theme.navbarColor}>
              Contact Us
            </A>
          </Layout>
          <Button href="#">^</Button>
        </>
      ) : (
        <>
          <Layout background={theme.navbarTextColor} color={theme.navbarColor}>
            <P to="/" color={theme.navbarColor}>
              OldRecipes
            </P>
            <NavLinkStyled
              color={theme.navbarColor}
              onClick={() => setLocalStorage()}
              background={theme.navbarTextColor}
              to="#"
            >
              Change Theme
            </NavLinkStyled>
            <NavLinkStyled color={theme.navbarColor} to="/home">
              Home
            </NavLinkStyled>
            <NavLinkStyled color={theme.navbarColor} to="/createRecipe">
              Share your recipe
            </NavLinkStyled>
          </Layout>
        </>
      )}
    </React.Fragment>
  );
});
