import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 2em 6.5% 2em;
  font-size: 1vw;
  width: 100vw;
  height: 1em;
  display: flex;
  justify-content: center;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 25em;
  height: 4em;

  list-style-type: none;
`;
export const Li = styled.li`
  color: white;
`;
export const NavLinkStyled = styled(NavLink)`
  font-size: 1em;
  font-weight: bold;
  font-family: "Red Hat Display", sans-serif;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  background: ${(props) => props.background};
  border-radius: 0.2em;
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  padding: 0.2em;
  &:hover {
    font-size: 1.5em;
  }
  &:focus {
    font-size: 1.5em;
  }
`;
