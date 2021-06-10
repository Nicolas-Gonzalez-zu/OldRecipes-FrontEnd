import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.ul`
  font-size: 1em;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const Card = styled.li`
  max-width: 20em;
  max-height: 40em;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0.06em solid rgba(0, 0, 0, 0.15);

  margin: 2% 6.5%;
`;

export const Img = styled.img`
  position: relative;
  top: -0.2em;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
`;

export const Title = styled(NavLink)`
  font-size: 1em;
  font-weight: bold;
  font-family: "Red Hat Display", sans-serif;
  text-decoration: underline;
  margin: 1em;
`;

export const Tag = styled.p`
  background-color: #f6412f;
  padding: 0.4em;
  margin: 0.2em;
  border-radius: 1em;
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  font-weight: bold;
  color: white;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
`;
export const TagCnt = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em;
`;
