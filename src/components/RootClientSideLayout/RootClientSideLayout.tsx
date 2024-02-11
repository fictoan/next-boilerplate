// We need this to be able to use the "useState" hook.
// Hooks are not available on server-side components, so we created a separate
// component for the client side. Yes, NextJS is weird AF.
"use client";


// EXTERNAL DEPS ===============================================================
import React, { useState } from "react";

// INTERNAL DEPS ===============================================================
import { ThemeProvider } from "fictoan-react";

// COMPONENTS ==================================================================
import { Header } from "../Header/Header";

// STYLES ======================================================================

// ASSETS ======================================================================


export const RootClientSideLayout = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"theme-light" | "theme-dark">("theme-light");
    
    return (
        <ThemeProvider currentTheme={theme}> 
            <Header theme={theme} setTheme={setTheme} />

            {children}
        </ThemeProvider>
    );
};
