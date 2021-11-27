import { createGlobalStyle } from "styled-components";

import WerksatzRegular from "./Werksatz-Regular.woff";
import WerksatzBold from "./Werksatz-Bold.woff";


export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family : "Werksatz";
        font-weight : 400;
        font-style  : normal;
        src         : url(${WerksatzRegular}) format("woff");
    }

    @font-face {
        font-family : "Werksatz";
        font-weight : 600;
        font-style  : normal;
        src         : url(${WerksatzBold}) format("woff");
    }
`;
