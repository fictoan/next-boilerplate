"use client";

// EXTERNAL DEPS ===============================================================

// INTERNAL DEPS ===============================================================
import { Button, Text, Header } from "fictoan-react";
import { useTheme } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./site-header.css";

export const SiteHeader = () => {
    const [theme, setTheme] = useTheme();

    const toggleTheme = () => {
        if (theme === "theme-light") {
            setTheme("theme-dark");
        } else {
            setTheme("theme-light");
        }
    };

    return (
        <Header
            id="site-header"
            layoutAsFlexbox
            verticallyCentreItems
            pushItemsToEnds
            paddingLeft="large"
            paddingRight="large"
        >
            <Text>Fictoan boilerplate for React</Text>

            <Button kind="primary" size="small" shadow="mild" onClick={toggleTheme}>
                Toggle theme
            </Button>
        </Header>
    );
};
