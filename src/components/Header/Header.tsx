"use client";

// EXTERNAL DEPS ===============================================================
import { SetStateAction } from "react";

// INTERNAL DEPS ===============================================================
import { Element, Button, Text } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./header.css";


type HeaderProps = {
    theme: string;
    setTheme: (theme: SetStateAction<"theme-light" | "theme-dark">) => void;
};

export const Header = ({ theme, setTheme }: HeaderProps) => {
    const toggleTheme = () => {
        if (theme === "theme-light") {
            setTheme("theme-dark");
        } else {
            setTheme("theme-light");
        }
    };

    return (
        <Element
            as="header"
            id="component-header"
            layoutAsFlexbox verticallyCentreItems pushItemsToEnds
            paddingLeft="large" paddingRight="large"
        >
            <Text>Fictoan boilerplate for React</Text>

            <Button kind="primary" size="small" shadow="mild" onClick={toggleTheme}>
                Toggle theme
            </Button>
        </Element>
    );
};
