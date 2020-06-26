//  External deps
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    Button
} from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets


export const Home = () => {
    useEffect(() => {
        document.title = "Home — FICTOAN";

        try {
            window.scroll({
                top: 0,
                left: 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge" gutters="large" marginTop="tiny" marginBottom="none">
                <Portion>
                    <Heading as="h3" textColor="hue" marginBottom="nano">FICTOAN / Home</Heading>
                    <Heading as="h6" marginBottom="tiny">A nice little home page.</Heading>

                    <Element as="div" className="wrapping-list">
                        <Link to="/about">
                            <Button kind="primary" shape="rounded" shadow="mild" marginRight="nano">
                                Another page &rarr;
                            </Button>
                        </Link>
                    </Element>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
