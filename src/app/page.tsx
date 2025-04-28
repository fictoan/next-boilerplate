// EXTERNAL DEPS =======================================================================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Button,
    Card,
    Element,
    Heading1,
    Portion,
    Row,
    Text,
    CodeBlock,
} from "fictoan-react";

// STYLES ==============================================================================================================
import "$styles/home.css";

// ASSETS ==============================================================================================================
import FictoanLogo from "$assets/images/fictoan-logo.svg";

export default function Home() {
    const code = `let a = 1;
let b = "This is a codeblock";
const c = () => {
  console.log("Fictoan!");
};
`;
    return (
        <article id="page-home">
            <Row layoutAsGrid horizontalPadding="large" marginTop="small">
                <Portion>
                    <Element as="div" verticallyCentreItems pushItemsToEnds>
                        <Heading1>Hello, world!</Heading1>

                        <FictoanLogo id="fictoan-logo" width="240px" />
                    </Element>
                </Portion>
            </Row>

            <Row layoutAsGrid horizontalPadding="large" marginTop="micro">
                <Portion>
                    <Element as="div" id="usp-grid">
                        <Card
                            id="card-1"
                            padding="micro"
                            shape="rounded"
                            bgColour="violet-light20"
                            borderColour="violet"
                            className="usp-card"
                        >
                            <header>
                                <Text
                                    size="large"
                                    weight="600"
                                    marginBottom="nano"
                                >
                                    About page
                                </Text>
                                <Text marginBottom="micro" textColour="black">
                                    A sample page to show navigation and routing
                                </Text>
                            </header>

                            <footer>
                                <Link href="/about">
                                    <Button
                                        textColour="white"
                                        bgColour="violet"
                                        shape="curved"
                                        size="small"
                                    >
                                        About &rarr;
                                    </Button>
                                </Link>
                            </footer>
                        </Card>

                        <Card
                            id="card-2"
                            className="usp-card"
                            padding="micro"
                            shape="rounded"
                            bgColour="orange-light30"
                            borderColour="orange"
                        >
                            <header>
                                <Text
                                    size="large"
                                    weight="600"
                                    marginBottom="nano"
                                >
                                    All the docs
                                </Text>
                                <Text marginBottom="micro" textColour="black">
                                    Full fledged documentation of all things Fictoan
                                </Text>
                            </header>

                            <footer>
                                <Link
                                    href="https://fictoan.io/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <Button
                                        textColour="white"
                                        bgColour="orange"
                                        shape="curved"
                                        size="small"
                                    >
                                        Docs &#8599;
                                    </Button>
                                </Link>
                            </footer>
                        </Card>

                        <Card
                            id="card-3"
                            className="usp-card"
                            padding="micro"
                            shape="rounded"
                            bgColour="green-light30"
                            borderColour="green"
                        >
                            <Text size="large" weight="600">
                                Card 1
                            </Text>
                        </Card>

                        <Card
                            id="card-4"
                            className="usp-card"
                            padding="micro"
                            shape="rounded"
                            bgColour="brick-light20"
                            borderColour="brick"
                        >
                            <Text textColour="black" size="large" weight="600">
                                Card 2
                            </Text>
                        </Card>

                        <Card
                            id="card-5"
                            className="usp-card"
                            padding="micro"
                            shape="rounded"
                            bgColour="sky-light30"
                            borderColour="sky"
                        >
                            <CodeBlock source={code} language="javascript" />
                        </Card>
                    </Element>
                </Portion>
            </Row>
        </article>
    );
}
