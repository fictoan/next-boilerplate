//  External deps
import React, { useEffect } from "react";

//  Internal deps
import { Card, Element, Heading, Portion, Row, Text } from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets
import MyFace from "../../assets/images/sujan.png";


export const Home = () => {
    useEffect(() => {
        document.title = "Sujan Sundareswaran";

        // try {
        //     window.scroll({
        //         top: 0,
        //         left: 0
        //     });
        // } catch (error) {
        //     window.scrollTo(0, 0);
        // }
    }, []);

    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row gutters="none" marginBottom="none">
                <Portion desktopSpan="two-third">
                    <Card id="title-card" className="grid-item" borderColour="transparent" paddingBottom="huge">
                        <Element as="div">
                            <Element
                                as="img"
                                src={MyFace}
                                className="main-portrait"
                                alt="Sujan Sundareswaran"
                                marginBottom="nano"
                            />
                            <Element as="div" marginBottom="micro">
                                <Heading as="h1" className="name">Sujan</Heading>
                                <Heading as="h1" className="name">Sundareswaran</Heading>
                            </Element>

                            <Heading as="h2" textColour="grey-40" margin="none">
                                I’m a multi-disciplinary creative who makes killer ginger tea.
                            </Heading>
                        </Element>
                        <Element as="div" className="vertically-centre-items">
                            <Heading as="h1" id="dots" marginRight="micro">&bull;&bull;</Heading>
                            <Text as="h3">2021</Text>
                        </Element>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half" />

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="violet">
                            I code.
                        </Heading>
                        <Heading as="h5" marginBottom="nano">
                            Fictoan
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            An open-source component library for React, to help designers start handing off
                            production-ready UI code.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="red-90">
                            I design fonts.
                        </Heading>
                        <Heading as="h5" marginBottom="nano">
                            Archetype Foundry
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            A type design studio focused on making nice monospace fonts for coders.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="violet">
                            I code.
                        </Heading>
                        <Heading as="h5" marginBottom="nano">
                            Code Chroma
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            A classy set of VSCode themes that’s both vibrant and subtle at the same time.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="violet">
                            I write.
                        </Heading>

                        <Heading as="h5" marginBottom="nano">
                            Project Fable
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            A historical fantasy novel based on ancient Hindu mythology and exploring themes around
                            karma.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="violet">
                            I code.
                        </Heading>

                        <Heading as="h5" marginBottom="nano">
                            Niram
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            Some fancy colour schemes for your next project, just for inspiration.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano" textColour="violet">
                            I click photos.
                        </Heading>

                        <Heading as="h5" marginBottom="nano">
                            Photos
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            I also like taking photos every now and then.
                        </Heading>
                    </Card>
                </Portion>

                <Portion desktopSpan="one-third" tabPTSpan="half">
                    <Card className="grid-item" borderColour="transparent">
                        <Heading as="h5" marginBottom="nano">
                            Writings and rants
                        </Heading>
                        <Heading as="h5" textColor="grey-40" weight="600" margin="none">
                            Some text.
                        </Heading>
                    </Card>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
