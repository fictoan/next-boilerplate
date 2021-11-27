import { createGlobalStyle } from "styled-components";
import { defaultColours } from "fictoan-react/dist";

export const GlobalStyle = createGlobalStyle`
    h1, h2, h3 { line-height : 1.2; }

    h1, h2, h3, h4, h5, h6 { letter-spacing : -0.5px; }
    
    .theme-toggle {
        position        : fixed;
        left            : 16px;
        bottom          : 16px;
        width           : 24px;
        cursor          : pointer;
        fill            : none;
        stroke          : ${defaultColours.grey60};
        stroke-linecap  : round;
        stroke-linejoin : round;
        stroke-width    : 2px;
    }
`;
