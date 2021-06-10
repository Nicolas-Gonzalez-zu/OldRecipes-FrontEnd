import styled from "styled-components";

export const AdvanceSearch = styled.button`
  background: rgba(0, 0, 0, 0);
  border: none;

  margin-top: 4em;

  text-decoration-line: underline;
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  font-size: 1em;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
  &:hover {
    background: rgba(0, 0, 0, 0);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Layout = styled.div`
  font-size: 1vw;
  width: 100vw;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DietTypeCnt = styled.div`
  display: flex;
  flex-wrap: wrap;
  order: -1;

  width: 40em;
`;

export const Diet = styled.div`
  margin: 0.2em;
`;

export const LabelDiet = styled.label`
  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  font-size: 1em;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
`;

export const CheckBox = styled.input``;

export const Sorter = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 2em;

  text-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  font-size: 1em;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
`;
