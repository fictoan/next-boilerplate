"use client";
import { ThemeProvider } from "fictoan-react";
import { useState } from "react";
import { Header } from "./Header";


export const RootClientLayout = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    
    return (
        <ThemeProvider currentTheme={theme}> 
            <Header theme={theme} setTheme={setTheme} />
            {children}
        </ThemeProvider>
    );
};
