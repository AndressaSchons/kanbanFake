import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Serif+Caption&family=Raleway&family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=PT+Serif+Caption&family=Raleway&family=Roboto&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        heigth: 100%;
    }

    body {
        font-family: 'PT Serif Caption', serif;
        
    }
`;
