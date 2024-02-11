"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Button, Card, Element, Heading, InputField, Portion, Row, Text } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-about.css";



const AboutPage = () => {
    return (
        <Element as="article" id="page-about">
            <Row layout="grid" bgColour="blue-light-10" padding="small" gutters="huge">
                <Portion>
                    <Heading as="h1" textColour="white">This is the about page!</Heading>
                </Portion>
            </Row>
        </Element>
    );
};

export default AboutPage;
