import { createGlobalStyle } from "styled-components";

import SpaceGroteskRegular from "./SpaceGrotesk-Medium.woff";
import SpaceGroteskBold from "./SpaceGrotesk-Bold.woff";
import SpaceMonoRegular from "./SpaceMono-Regular.woff";
import SpaceMonoBold from "./SpaceMono-Bold.woff";


export const GlobalFonts = createGlobalStyle`
    // Default body font, regular
    @font-face {
        font-family : "Space Grotesk";
        font-weight : 400;
        font-style  : normal;
        src         : url(${SpaceGroteskRegular}) format("woff");
    }

    // Default body font, bold
    @font-face {
        font-family : "Space Grotesk";
        font-weight : 600;
        font-style  : normal;
        src         : url(${SpaceGroteskBold}) format("woff");
    }

    // Monospace, regular
    @font-face {
        font-family : "Space Mono";
        font-weight : 400;
        font-style  : normal;
        src         : url(${SpaceMonoRegular}) format("woff");
    }

    // Monospace, bold
    @font-face {
        font-family : "Space Mono";
        font-weight : 600;
        font-style  : normal;
        src         : url(${SpaceMonoBold}) format("woff");
    }
`;
