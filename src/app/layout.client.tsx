"use client"

// EXTERNAL DEPS =======================================================================================================
import React, { ReactNode } from "react";

// INTERNAL DEPS =======================================================================================================
import { ThemeProvider } from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { SiteHeader } from "$components/Header/SiteHeader";

// STYLES ==============================================================================================================
import "$styles/globals.css";

export const RootLayoutClient = ({children} : { children : ReactNode }) => {
    const listOfThemes = ["theme-light", "theme-dark"];

    return (
        <html lang="en">
        <body>
        <ThemeProvider themeList={listOfThemes} currentTheme="theme-dark">
            <SiteHeader />

            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
