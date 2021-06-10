import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 8vh;
  padding: 0 6.5%;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  font-size: 1vw;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ChangeTheme = styled.button`
  margin-left: 4em;

  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: bold;
  font-family: "Red Hat Display", sans-serif;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const P = styled(NavLink)`
  position: absolute;
  left: 7em;

  color: ${(props) => props.color};
  font-weight: bold;
`;

export const A = styled.a`
  margin-left: 4em;

  color: ${(props) => props.color};
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.a`
  width: 1em;
  height: 1em;
  text-align: center;

  font-size: 3em;
  border-radius: 0.1em;
  background: #ffffff;
  color: black;

  position: fixed;
  bottom: 0.5em;
  right: 1em;
  &:hover {
    background: #f6412f;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin-left: 4em;

  color: ${(props) => props.color};
  font-weight: bold;
  text-decoration: underline;
`;
