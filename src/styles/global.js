import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

//arrow function
body{
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    -webkit-font-smoothing: antialiased;
}

body, input, button, testarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
}

a{
    text-decoration:none;
}

buttun, a {
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}
`;

