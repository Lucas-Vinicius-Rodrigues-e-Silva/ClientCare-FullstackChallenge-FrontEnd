import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type: style none;
}

button {
    cursor: pointer;
    border: none;
    background: transparent;
}

ul, ol, li{
    list-style: none;
}

img{
    max-width: 100%;
}

input, select{
    background: transparent;
    border: none;
} 

:root{
    --color-primary:#91a7ff;
    --color-primary-focus:#748ffc;
    --color-primary-negative: #59323F;
    --color-overlay-modal:#748ffcaa;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-sucess:#3FE864;
    --color-error:#E83F5B;
}
body{
    background: var(--color-grey-4);
}

h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Inter', sans-serif;
    color: var(--color-white);
}

`;
