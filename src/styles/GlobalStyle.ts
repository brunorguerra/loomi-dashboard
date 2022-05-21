import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --body: #F6F6F9;
        --shape: #FFFFFF;
        --input: #F3F5F6;
        --input-text: #333333;

        --white: #fff;
        --title: #4E5D66;
        --purple: #5A4CA7;
        --purpleOpacity: rgba(90, 76, 167, 0.55);
        
        --boxShadow: #00000014;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font: 1.8rem 'Ubuntu', sans-serif;
        background: var(--body) url('./assets/background-body.svg') no-repeat center/cover;
        -webkit-font-smoothing: antialiased;
    }
    input, button, textarea {
        border: none;
        outline: none;
    }
    button {
        cursor: pointer;
    }
`;
