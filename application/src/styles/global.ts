import { createGlobalStyle } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    *{
        margin:  0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    body{
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        background-color: ${( {theme} ) => theme.colors["gray-800"]};
    }

    *:focus{
        outline: none;
        box-shadow: 0px 0px 0px 2px ${( {theme} ) => theme.colors["green-500"]};
    }

    body,input,textarea,button{
        font: 400 1rem ${( {theme} ) => theme.fonts.Roboto};
        color: ${( {theme} ) => theme.colors["gray-300"]} ;
    }
`