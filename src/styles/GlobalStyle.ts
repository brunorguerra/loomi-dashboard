import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --body: #F6F6F9;
        --shape: #FFFFFF;
        --boxShadow: #00000014;

        --input: #F3F5F6;
        --input-text: #333333;
        --input-textOpacity: rgba(51, 51, 51, 0.4);

        --title: #4E5D66;
        --titleOpacity: rgba(78, 93, 102, 0.24);

        --purple: #5A4CA7;
        --purpleOpacity: rgba(90, 76, 167, 0.55);

        --green: #109E8E;
        --red: #D6628E;

        --white: #fff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        min-height: 100%;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font: 1.8rem 'Ubuntu', sans-serif;
        background: var(--body) url('./assets/background-body.svg') no-repeat center/cover fixed;
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
