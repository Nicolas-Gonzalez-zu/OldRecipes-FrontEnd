import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LayoutLanding = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 1vw;
  padding: 0 6.5%;

  display: flex;

  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed; //Si la imagen es mas alta que el viewport evita que se genere un scrollbar
`;

export const LayoutInnerCnt = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;

export const TextCnt = styled.div`
  width: 41.5em;
  height: 30.8em;
  padding: 5% 2.5% 5% 2.5%;

  position: relative;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.background};
  backdrop-filter: blur(0.6em);
`;

export const Text = styled.p`
  font-size: 4em;

  font-family: "Source Serif Pro", serif;
  font-style: normal;
  font-weight: bold;

  word-wrap: break-word;

  color: ${(props) => props.color};

  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
`;

export const Button = styled(NavLink)`
  width: 6em;
  height: 3em;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 3em;
  right: 3em;

  background: #ffffff;
  border-radius: 1em;

  text-align: center;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6em;
  color: #000000;

  text-decoration-line: underline;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  &:hover {
    background: #f6412f;
    color: #ffffff;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  width: 15em;
  height: 2em;
  padding: 0.5em;

  position: absolute;
  top: -1em;

  font-weight: bold;
  text-align: center;
  align-self: center;
  color: #ffffff;

  background-color: ${(props) => props.backgroundColor};
`;
