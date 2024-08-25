"use client";

// EXTERNAL DEPS ===============================================================

// INTERNAL DEPS ===============================================================
import { Element, Button, Text } from "fictoan-react";
import { useTheme } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./header.css";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "theme-light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Element
      as="header"
      id="component-header"
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
    </Element>
  );
};
