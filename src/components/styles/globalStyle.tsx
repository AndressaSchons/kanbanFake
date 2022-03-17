import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=ABeeZee&family=PT+Serif+Caption&family=Raleway&family=Roboto:wght@700&display=swap" rel="stylesheet">

*{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        heigth: 100%; 
        margin: 0;
    }

    body {
        font-family: 'PT Serif Caption', serif;
        
    }
`;
