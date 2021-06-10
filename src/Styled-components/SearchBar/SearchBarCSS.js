import styled from "styled-components";

export const Layout = styled.div`
  font-size: 1vw;

  width: 100vw;
  height: 75vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 13em 6.5% 0em;

  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed; //Si la imagen es mas alta que el viewport evita que se genere un scrollbar
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;

  font-size: 3em;
  font-family: "Source Serif Pro", serif;
  font-style: normal;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 10em;
  height: 1em;
  padding-left: 0.3em;

  background: #f6412f;

  color: #ffffff;
  font-size: 3em;

  outline: none;
  border: none;
  border-radius: 0.2em;

  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  margin-top: 0.5em;
  align-self: flex-end;

  font-size: 2em;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;

  background: rgba(0, 0, 0, 0);
  text-decoration-line: underline;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);

  &:hover {
    background: rgba(0, 0, 0, 0);
    transform: scale(1.05);
    cursor: pointer;
    border-radius: 0.2em;
  }
`;
