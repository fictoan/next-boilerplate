//  External dependencies
import React from "react";
import {
    BrowserRouter,
    Switch as RouteSwitch,
    Route
} from "react-router-dom";

//  Internal dependencies
import { ThemeProvider } from "fictoan-react";

//  Local components
import { ThisWebsiteTheme } from "./styles/RFDocs.theme";
import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

//  Local assets


export const App = () => {
    return (
        <ThemeProvider theme={ ThisWebsiteTheme }>
            <GlobalStyle />

            <GlobalFonts />

            <BrowserRouter>
                <RouteSwitch>
                    <Route
                        exact
                        path="/"
                        component={ Home }
                    />

                    <Route
                        exact
                        path="/about"
                        component={ About }
                    />
                </RouteSwitch>
            </BrowserRouter>
        </ThemeProvider>
    );
}
