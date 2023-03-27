import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style-type: style none;
}

button {
    cursor: pointer;
    border:none;
    background:transparent;
}

ul, ol, li{
    list-style:none
}

img {
    max-width: 100%
}

input, select {
    background: transparent;
    border:none;
}

:root {
    --color-primary: #91a7ff;
    --color-primary-focus: #748ffc;
    --color-grey-4: #ced4da;
    --color-grey-3: #dee2e6;
    --color-grey-2: #e9ecef;
    --color-grey-1: #f1f3f5;
    --color-grey-0: #f8f9fa;
    --color-dark-mode:#212529;
    --color-primary-dark-mode: #dbe4ff;
}

body{
    background: var(--color-grey-0);
}

h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Playfair Display', serif;
}


`;
