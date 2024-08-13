"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import {
  Badge,
  Button,
  Card,
  Element,
  Heading1,
  InputField,
  Portion,
  Row,
  Text,
} from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-about.css";

const AboutPage = () => {
  return (
    <Element as="article" id="page-about">
      <Row layoutAsGrid bgColour="blue-light-10" padding="small" gutters="huge">
        <Portion>
          <Heading1 as="h1" textColour="white">
            This is the about page!
          </Heading1>
        </Portion>
        <Portion>
          <Badge
            bgColor="red"
            textColor="white"
            borderColor="white"
            shape="rounded"
          >
            Text
          </Badge>
        </Portion>
      </Row>
    </Element>
  );
};

export default AboutPage;
