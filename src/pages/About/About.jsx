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
import { AboutStyled } from "./About.styled";

//  Local assets


export const About = () => {
    useEffect(() => {
        document.title = "About — FICTOAN";

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
        <AboutStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge" gutters="large" marginTop="tiny" marginBottom="none">
                <Portion>
                    <Heading as="h3" textColor="hue" marginBottom="nano">FICTOAN / Another page</Heading>
                    <Heading as="h6" marginBottom="tiny">Add some other content here.</Heading>

                    <Element as="div" className="wrapping-list">
                        <Link to="/">
                            <Button kind="primary" shape="rounded" shadow="mild" marginRight="nano">
                                &larr; Go back
                            </Button>
                        </Link>
                    </Element>
                </Portion>
            </Row>
        </AboutStyled>
    );
}
