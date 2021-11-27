//  External dependencies
import React, { useState } from "react";
import {
    BrowserRouter,
    Switch as RouteSwitch,
    Route
} from "react-router-dom";

//  Internal dependencies
import { ThemeProvider } from "fictoan-react";

//  Local components
import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";
import { WebsiteLightTheme } from "./styles/Website.light.theme";
import { WebsiteDarkTheme } from "./styles/Website.dark.theme";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

//  Local assets
import { ReactComponent as IconTheme } from "./assets/icons/theme.svg";


export const App = () => {
    let [currentTheme, setCurrentTheme] = useState("light");

    const toggleTheme = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
        } else {
            setCurrentTheme("light");
        }
    }

    return (
        <ThemeProvider
            theme={currentTheme === "light" ? WebsiteLightTheme : WebsiteDarkTheme}
        >
            <GlobalStyle />

            <GlobalFonts />

            <BrowserRouter>
                <IconTheme
                    src={IconTheme} className="theme-toggle"
                    onClick={toggleTheme}
                />

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
