import { Heading } from "fictoan-react";
import FictoanLogo from "@/assets/fictoan-logo.svg";
import "@/styles/home.css";

export default function Home() {
    return (
        <article id="page-home">
            <Heading as="h1">Hello, world!</Heading>
            <FictoanLogo />
        </article>
    );
}
