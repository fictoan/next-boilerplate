"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import {
    Article,
    Heading1,
    Portion,
    Row,
} from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-about.css";

const AboutPage = () => {
    return (
        <Article id="page-about">
            <Row layoutAsGrid padding="small" gutters="huge">
                <Portion>
                    <Heading1 as="h1">This is the about page!</Heading1>
                </Portion>
            </Row>
        </Article>
    );
};

export default AboutPage;
