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
  align-items: center;
  justify-content: center;
`;

export const CntGnrl = styled.div`
  max-height: 35em;

  padding: 5% 2.5% 5% 2.5%;
  margin: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  backdrop-filter: blur(0.6em);
`;

export const Title = styled.p`
  width: 75%;
  padding: 0.5em;

  position: absolute;
  top: -1em;

  font-weight: bold;
  text-align: center;
  align-self: center;
  color: #ffffff;

  background-color: ${(props) => props.backgroundColor};
`;

export const Tags = styled(CntGnrl)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: unset;
  text-align: center;
  padding: 1em;
`;
export const TagsLabel = styled.label`
  font-family: "Source Serif Pro", serif;
  font-style: normal;

  word-wrap: break-word;

  color: ${(props) => props.color};
`;

export const P = styled.p`
  width: 8em;
  font-family: "Source Serif Pro", serif;
  font-style: normal;
  font-weight: bold;

  word-wrap: break-word;

  color: ${(props) => props.color};

  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img``;

export const Span = styled.span`
  font-family: "Source Serif Pro", serif;
  font-style: normal;
  font-weight: bold;

  word-wrap: break-word;

  color: ${(props) => props.color};

  position: absolute;
  top: -1em;

  width: 75%;
  padding: 0.5em;

  font-weight: bold;
  text-align: center;
  align-self: center;
  color: #ffffff;

  background-color: ${(props) => props.backgroundColor};

  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
`;

export const Text = styled.p`
  overflow-y: scroll;

  color: ${(props) => props.color};

  &::-webkit-scrollbar {
    background: transparent;
  }
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
  text-align: center;
`;
