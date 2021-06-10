import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 1vw;
  padding: 0 6.5%;

  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputCnt = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DietTypesCnt = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  padding: 1em;
  padding-top: 2em;

  position: absolute;
  right: -22em;

  width: 20em;
  height: 20em;

  background: ${(props) => props.background};
  backdrop-filter: blur(0.6em);
`;

export const DishTypesCnt = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-evenly;

  padding: 1em;
  padding-top: 2em;

  width: 20em;
  height: 20em;

  position: absolute;
  left: -22em;

  background: ${(props) => props.background};
  backdrop-filter: blur(0.6em);
`;

export const TagsText = styled.p`
  color: ${(props) => props.color};
`;

export const Tags = styled.div`
  display: flex;
`;

export const TagsLabel = styled.label`
  display: flex;
`;
export const TitleTags = styled.p`
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

export const Form = styled.form`
  width: 41.5em;
  height: 30.8em;
  padding: 5% 2.5% 5% 2.5%;

  position: relative;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.background};
  backdrop-filter: blur(0.6em);
`;

export const Title = styled.h1`
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

export const Label = styled.label`
  font-weight: bold;
  font-family: "Red Hat Display", sans-serif;
  text-decoration: underline;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  color: ${(props) => props.color};
`;

export const Textarea = styled.textarea`
  font-size: 1em;
  width: 37em;
  max-width: 41em;
  max-height: 4em;
  height: 4em;
  resize: none;
  outline: none;
`;
export const Input = styled.input`
  font-size: 1em;
`;

export const Button = styled.button`
  font-weight: bold;
  text-align: center;
  align-self: center;
  color: #ffffff;

  background-color: ${(props) => props.backgroundColor};

  padding: 1em;
  font-size: 1em;
  margin: 1em;
  &:hover {
    background: #f6412f;
    color: #ffffff;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CntButton = styled.div`
  display: flex;
  align-self: center;
`;
