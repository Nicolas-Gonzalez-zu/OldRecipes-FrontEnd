import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*, *::after, *::before
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body{
  width: 100vw;
  font-family: 'Red Hat Display', sans-serif;
  overflow-x: hidden;
}
a {
  color: inherit;
  text-decoration: inherit;
}
a:visited {
  color: inherit;
  text-decoration: inherit;
}
button{
  border: inherit;
}
button:focus{
  outline:none
}
`;
