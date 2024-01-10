"use client";
import { Button, Row, Text } from "fictoan-react";
import { SetStateAction } from "react";

type HeaderProps = {
    theme: string;
    setTheme: (theme: SetStateAction<"light" | "dark">) => void;
};

export const Header = ({ theme, setTheme }: HeaderProps) => {
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return (
        <header>
            <Row layout="flexbox" pushItemsToEnds>
                <Text>Ficotan boilerplate</Text>
                <Button kind="tertiary" onClick={toggleTheme}>
                    Toggle theme
                </Button>
            </Row>
        </header>
    );
};
